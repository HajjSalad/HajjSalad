// Function to check if an element is a text node
function isTextNode(node) {
    return node.nodeType === 3;
}

// Function to create a new hoverNode
function createHoverNode(parentTagName, parentID, innerHTML) {
    const hoverNode = document.createElement('div');
    hoverNode.className = 'hoverNode';
    hoverNode.innerHTML = parentTagName;
    hoverNode.addEventListener('click', function() {
        alert(`Tag Name: ${parentTagName}\nID: ${parentID}\nInnerHTML: ${innerHTML}`);
    });
    return hoverNode;
}

// Function to navigate through DOM elements recursively
function navigateDOM(element) {
    // Check if the current element is a text node
    if (isTextNode(element)) {
        // Do nothing for text nodes
    } else {
        const parentTagName = element.tagName;
        const parentID = element.id;
        const innerHTML = element.innerHTML;

        // Create a new hoverNode for non-text nodes
        const hoverNode = createHoverNode(parentTagName, parentID, innerHTML);
        element.appendChild(hoverNode);
        
        // Traverse child nodes if any
        if (element.childNodes.length > 0) {
            element.childNodes.forEach(child => {
                navigateDOM(child);
            });
        }
    }
}

// Start navigating from the body element
navigateDOM(document.body);
