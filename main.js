const documents = [
    { title: "Document 1", password: "password1", url: "https://example.com/document1.pdf" },
    { title: "Document 2", password: "password2", url: "https://example.com/document2.pdf" },
    { title: "Document 3", password: "password3", File: "book1.txt" }
];

const submitBtn = document.getElementById("submitBtn");
const passwordInput = document.getElementById("password");
const documentContainer = document.getElementById("documentContainer");

submitBtn.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
    let matchingDocument = null;

    for (const document of documents) {
        if (enteredPassword === document.password) {
            matchingDocument = document;
            break;
        }
    }

    if (matchingDocument) {
        documentContainer.innerHTML = `<a href="${matchingDocument.url}" target="_blank">${matchingDocument.title}</a>`;
    } else {
        documentContainer.textContent = "Document not found or incorrect password.";
    }
});
