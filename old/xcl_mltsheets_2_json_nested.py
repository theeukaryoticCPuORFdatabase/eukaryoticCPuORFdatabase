import pandas as pd
import os
import json

# Ask user for the Excel file location
excel_file_path = input("Enter the path of the Excel file: ")

# Check if the file exists
if not os.path.exists(excel_file_path):
    print("File does not exist. Please check the path.")
else:
    # Load the Excel file
    excel_file = pd.ExcelFile(excel_file_path)

    # Dictionary to hold data from all sheets
    all_sheets_data = {}

    # Convert each sheet and add it to the dictionary
    for sheet_name in excel_file.sheet_names:
        df = pd.read_excel(excel_file, sheet_name)
        all_sheets_data[sheet_name] = df.to_dict(orient='records')

    # Get directory of the input Excel file
    directory = os.path.dirname(excel_file_path)

    # Save the JSON file in the same directory as the Excel file
    json_file_path = os.path.join(directory, 'combined_data.json')

    # Convert the dictionary to JSON and save it
    with open(json_file_path, 'w') as json_file:
        json.dump(all_sheets_data, json_file, indent=4)

    print(f"JSON file saved at {json_file_path}")
