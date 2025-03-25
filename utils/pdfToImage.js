import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// Set the worker source for PDF.js
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

/**
 * Converts a specific page of a PDF file to an image URL.
 * @param {string} pdfUrl - The URL of the PDF file.
 * @param {number} pageNumber - The page number to convert (1-based index).
 * @returns {Promise<string|null>} - The image URL (base64 PNG) or null on error.
 */
export async function pdfToImage(pdfUrl, pageNumber = 1) {
  if (typeof window === "undefined") return null; // Ensure this runs in the browser

  try {
    // Load the PDF from the URL
    const pdf = await getDocument(pdfUrl).promise;

    if (pageNumber < 1 || pageNumber > pdf.numPages) {
      console.warn(`Invalid page number: ${pageNumber}. PDF has ${pdf.numPages} pages.`);
      return null;
    }

    const page = await pdf.getPage(pageNumber);
    const scale = 2; // Adjust for better quality
    const viewport = page.getViewport({ scale });

    // Create a canvas for rendering
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
    
    return canvas.toDataURL("image/png"); // Convert canvas to base64 image
  } catch (error) {
    console.error("Error converting PDF to image:", error);
    return null;
  }
}
