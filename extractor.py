import tkinter as tk
from tkinterdnd2 import DND_FILES, TkinterDnD
from tkinter import filedialog, messagebox
import pdfplumber
import pandas as pd
import os
import re

# Function to extract data and generate CSV
# Function to extract data and generate CSV
def process_file(filepath):
    if not filepath:
        return

    filepath = filepath.strip("{}")  # Remove curly braces from paths with spaces
    messagebox.showinfo("Processing", f"Processing file: {os.path.basename(filepath)}")

    # Extract text from PDF
    with pdfplumber.open(filepath) as pdf:
        text = "\n".join([page.extract_text() for page in pdf.pages if page.extract_text()])

    # Extract estimate number
    estimate_match = re.search(r"ESTIMATE #(\d+)", text)
    estimate_number = estimate_match.group(1) if estimate_match else "Unknown"

    # Extract client name dynamically
    client_match = re.search(r"(\b[A-Z][a-z]+ [A-Z][a-z]+\b)\n\d{2,5}\s\w+", text)
    client_name = client_match.group(1).strip() if client_match else "Unknown Client"

    # Extract service items
    services = []
    lines = text.split("\n")

    for i in range(len(lines)):
        parts = lines[i].split()
        
        if len(parts) > 3 and parts[-2].startswith("$"):  # Identifying service entries
            # Find the last two dollar amounts
            dollar_indices = [j for j, part in enumerate(parts) if part.startswith("$")]
            if len(dollar_indices) >= 2:
                amount_index = dollar_indices[-1]
                unit_price_index = dollar_indices[-2]
                
                # Extract service name (everything before the quantity)
                service = " ".join(parts[:unit_price_index-1])
                # Extract quantity
                quantity = parts[unit_price_index-1]
                # Extract unit price and amount
                unit_price = parts[unit_price_index].replace("$", "")
                amount = parts[amount_index].replace("$", "")
                # Get details from next line
                details = lines[i + 1] if i + 1 < len(lines) else ""

                services.append([estimate_number, client_name, service, quantity, unit_price, amount, "", "", details])

    # Convert to DataFrame with new column
    columns = ["Estimate Number", "Client", "Service/Materials", "Quantity", "Unit Price", "Amount", 
               "Complete Time and Manpower", "Cost", "Details"]
    df = pd.DataFrame(services, columns=columns)

    # Save as CSV
    output_path = os.path.join(os.getcwd(), "output.csv")
    df.to_csv(output_path, index=False)
    output_file.set(output_path)

    messagebox.showinfo("Success", "File processed! Click 'Download CSV'.")

# Function to browse and select a file
def on_file_select():
    file_path = filedialog.askopenfilename(filetypes=[("PDF Files", "*.pdf")])
    if file_path:
        process_file(file_path)

# Function to save CSV file
def download_csv():
    if not output_file.get():
        messagebox.showerror("Error", "No file processed yet!")
        return

    save_path = filedialog.asksaveasfilename(defaultextension=".csv", filetypes=[("CSV Files", "*.csv")])
    if save_path:
        os.rename(output_file.get(), save_path)
        messagebox.showinfo("Success", "CSV saved successfully!")

# GUI Setup
root = TkinterDnD.Tk()  # Enable Drag & Drop
root.title("PDF to CSV Processor")
root.geometry("400x250")

output_file = tk.StringVar()

# Drag and Drop Area
drop_label = tk.Label(root, text="Drag and Drop PDF Here", bg="lightgray", width=40, height=4)
drop_label.pack(pady=10)

def drop(event):
    process_file(event.data)

root.drop_target_register(DND_FILES)
root.dnd_bind("<<Drop>>", drop)

# Browse Button
btn_select = tk.Button(root, text="Select PDF", command=on_file_select)
btn_select.pack(pady=5)

# Download CSV Button
btn_download = tk.Button(root, text="Download CSV", command=download_csv)
btn_download.pack(pady=5)

root.mainloop()

