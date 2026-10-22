"""Prepare approved 2x artwork copies without changing the supplied originals."""
from pathlib import Path
import json
from PIL import Image, ImageFilter, ImageDraw

source = Path('D:/Projetos/ODPV/Assets/Para o site/image-assets')
destination = Path(__file__).resolve().parents[1] / 'public' / 'artwork'
destination.mkdir(parents=True, exist_ok=True)
names = {'Arte da capa.webp': 'arte-capa', 'Foto do autor(1).webp': 'autor-retrato', 'Imagem do autor.webp': 'autor'}
manifest = []
sheet = Image.new('RGB', (900, 6 * 180), '#f2e6d8')
draw = ImageDraw.Draw(sheet)
for index, path in enumerate(sorted(source.glob('*.webp'))):
    with Image.open(path) as original:
        stem = names.get(path.name, path.stem)
        width, height = original.size
        preview = original.convert('RGBA')
        preview.thumbnail((135, 145))
        x, y = (index % 6) * 150, (index // 6) * 180
        sheet.paste(preview, (x, y), preview)
        draw.text((x + 3, y + 150), stem, fill='#593a27')
        enlarged = original.resize((width * 2, height * 2), Image.Resampling.LANCZOS)
        enlarged = enlarged.filter(ImageFilter.UnsharpMask(radius=1, percent=65, threshold=3))
        enlarged.save(destination / f'{stem}-2x.webp', quality=92, method=5)
        if stem == 'arte-capa':
            enlarged.resize((480, 720), Image.Resampling.LANCZOS).save(destination / 'arte-capa-preview.webp', quality=92)
        manifest.append({'source': path.name, 'file': f'{stem}-2x.webp', 'original': [width, height], 'output': list(enlarged.size)})
        print(stem, original.size, enlarged.size, flush=True)
        enlarged.close()
sheet.save(destination / 'contact-sheet.jpg')
(destination / 'manifest.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding='utf-8')
