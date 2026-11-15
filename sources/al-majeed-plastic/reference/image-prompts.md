# Image prompts — Al Majeed Plastic Industries (demo)

15 slots. Generate, drop the files into `reference/ai-batch1/` named with the slot key as a
prefix (e.g. `hero-plant_001.jpg`), then run `node scripts/import-ai.mjs reference/ai-batch1` —
it cover-crops each one to the exact size and writes the WebP into `public/images/`.

Same rules as Masafat: put the blankness *in the subject* ("plain unmarked bottle with no
label"), repeat it per object, and carry the long negative prompt.

**Shared tail:** Jordanian industrial plant, clean modern factory, cool blue-teal colour grade,
documentary industrial photography, realistic, sharp focus, high detail. No people, no faces.

**Shared negative:** text, letters, words, typography, watermark, logo, brand, label, sticker,
barcode, printed artwork on bottles, people, faces, hands, cartoon, illustration, 3d render.

| Key | Size | Prompt |
| --- | --- | --- |
| hero-plant | 1920×1080 | Wide shot of a modern plastic blow-moulding hall, rows of machines, clear plain unlabeled PET bottles moving on a conveyor in the foreground, soft daylight from high windows |
| hero-range | 1920×1080 | Studio line-up of plain unlabeled plastic containers on dark navy background: clear PET bottles, white HDPE gallons, transparent jars, clear preforms, soft rim light |
| preforms | 960×600 | Close-up of hundreds of clear plain PET preforms in a steel bin, light passing through them, shallow depth of field |
| household | 960×600 | Plain blank white and pastel HDPE detergent and shampoo bottles with no labels standing in rows on a factory table |
| food | 960×600 | Plain clear PET dairy and juice bottles and a clear plastic bucket, all unlabeled, on a stainless steel surface, bright hygienic setting |
| gallons | 960×600 | Stacked plain unmarked white and blue HDPE gallons with handles in a warehouse, no labels |
| jars | 960×600 | Plain clear and white plastic jars and tubs with blank lids, no labels, arranged on a light surface |
| medical | 960×600 | Plain white unmarked plastic sterilizer and disinfectant bottles in a clean room, no labels |
| moulds | 1600×1000 | Open polished steel blow mould showing a bottle-shaped cavity on a workbench in a mould-making workshop, plain unmarked steel |
| mould-cavity | 900×1200 | Macro of a mirror-polished bottle cavity inside a steel mould half, plain steel, no markings |
| cnc | 900×1200 | CNC milling machine cutting a steel mould block, coolant spray, plain unmarked machine, no screens with text |
| prototypes | 900×1200 | Three clear plain plastic bottle prototypes standing beside a steel mould half, workshop light |
| qc | 1200×900 | Clear plain PET bottles on a quality-control light table with calipers, laboratory setting, no people |
| pallets | 1200×900 | Shrink-wrapped pallets of plain plastic containers in a factory loading bay, forklift without markings, no people |
| hall | 1600×1000 | Clean production hall with blow-moulding machines and plain plastic bottles, high ceiling, daylight |
