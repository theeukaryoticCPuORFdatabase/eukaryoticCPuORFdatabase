import pandas as pd

# Load the Excel file
excel_file = pd.ExcelFile('//Users/zacharypaling/Desktop/coding/CPuORF_database_website/references.xlsx')

# Convert each sheet to a separate JSON file
for sheet_name in excel_file.sheet_names:
    df = pd.read_excel(excel_file, sheet_name)
    json_data = df.to_json(orient='records', indent=4)
    with open(f'{sheet_name}.json', 'w') as json_file:
        json_file.write(json_data)
