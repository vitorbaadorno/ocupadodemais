"""Create faithful 4x masters and lightweight web copies of the supplied PNGs."""
from pathlib import Path
import json
from PIL import Image, ImageFilter

source = Path('D:/Projetos/ODPV/Assets/Para o site/Imagens ruins/Imagens pro site')
root = Path(__file__).resolve().parents[1]
masters = root / 'assets' / 'section-artwork-4x'
web = root / 'public' / 'artwork' / 'reading'
masters.mkdir(parents=True, exist_ok=True)
web.mkdir(parents=True, exist_ok=True)
manifest = []
for path in sorted(source.glob('*.png')):
    with Image.open(path) as original:
        enlarged = original.resize((original.width * 4, original.height * 4), Image.Resampling.LANCZOS)
        # Sharpen colors lightly while retaining the resampled alpha channel.
        alpha = enlarged.getchannel('A')
        enlarged = enlarged.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1, percent=60, threshold=3)).convert('RGBA')
        enlarged.putalpha(alpha)
        enlarged.save(masters / f'{path.stem}-4x.webp', quality=95, method=4)
        record = {'source': path.name, 'original': list(original.size), 'master': list(enlarged.size)}
        enlarged.thumbnail((320, 400), Image.Resampling.LANCZOS)
        enlarged.save(web / f'{path.stem}.webp', quality=92, method=4)
        record['web'] = list(enlarged.size)
        manifest.append(record)
        print(path.stem, record['master'], flush=True)
(masters / 'manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
