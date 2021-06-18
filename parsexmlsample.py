import xml.etree.ElementTree as ET

# get the xml data
stream = open('sampleXML.xml', 'r')

# parse the Data into an ElementTree Object

xml = ET.parse(stream)

# Get the "root" Element Object from the ElementTree

root = xml.getroot()

# Iterate through each child of the root element
for e in root:
    # print the string field version of the element
    print(ET.tostring(e))
    print("")

    # print the 'Id' attribute of the Element object
    print(e.get("Id"))
