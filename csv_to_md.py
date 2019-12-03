import csv

csvfile = open('data.csv', 'r')

# Save a CSV Reader object.
datareader = csv.reader(csvfile, delimiter=',', quotechar='"')

# Empty array for data headings, which we will fill with the first row from our CSV.
data_headings = []

# Loop through each row...
for row_index, row in enumerate(datareader):
    # If this is the first row, populate our data_headings variable.
    if row_index == 0:
        data_headings = row

    # Otherwise, create a YAML file from the data in this row...
    else:
        # Open a new file with filename based on the first column
        filename = "_industry/" + row[0].lower().replace(" county", "").replace(" ", "_") + '.md'
        new_yaml = open(filename, 'w')

        # Empty string that we will fill with YAML formatted text based on data extracted from our CSV.
        yaml_text = ""
        yaml_text += "---\n"
        yaml_text += "layout: posts \n"
        yaml_text += "author_profile: false \n"

        # Loop through each cell in this row...
        for cell_index, cell in enumerate(row):
            cell_heading = data_headings[cell_index].lower().replace(" ", "_").replace("-", "_").replace("%", "percent").replace("$", "").replace(",", "")
            cell_text = cell_heading + ": " + cell.replace("\n", ", ") + "\n"

            # Add this line of text to the current YAML string.
            yaml_text += cell_text

            yaml_text += "title: " + cell.replace("\n", ", ") + "\n"
            yaml_text += "permalink: /" + cell.replace("\n", ", ").lower().replace(" ", "-").replace("_", "-").replace("%", "percent").replace("$", "").replace(",", "") + "\n"

        # Write our YAML string to the new text file and close it.
        new_yaml.write(yaml_text + "---\n")
        new_yaml.close()

# We're done! Close the CSV file.
csvfile.close()
