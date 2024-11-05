function findDuplicates() {
    const text = document.getElementById("textInput").value;
    const words = text.toLowerCase().split(/\W+/).filter(Boolean);
    const wordCount = {};
    const duplicates = [];

    // Count occurrences of each word
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Identify duplicate words
    for (const word in wordCount) {
      if (wordCount[word] > 1) {
        duplicates.push(`${word} (appears ${wordCount[word]} times)`);
      }
    }

    // Display result
    const output = document.getElementById("output");
    if (duplicates.length > 0) {
      output.innerHTML = "<p>Duplicate words found:</p><ul><li>" + duplicates.join("</li><li>") + "</li></ul>";
    } else {
      output.innerHTML = "<p>No duplicate words found.</p>";
    }
    output.style.display = "block";
  }