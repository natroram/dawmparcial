import fs from "fs";

export const updateJSON = (pathJSON, updatedData) => {
  fs.writeFile(pathJSON, updatedData, "utf8", (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
};
