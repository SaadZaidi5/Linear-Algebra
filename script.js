function calculateEigen() {
    // Get matrix elements
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);

    // Calculate the characteristic polynomial coefficients
    const trace = a + d;
    const determinant = a * d - b * c;

    // Calculate the eigenvalues
    const lambda1 = (trace + Math.sqrt(trace * trace - 4 * determinant)) / 2;
    const lambda2 = (trace - Math.sqrt(trace * trace - 4 * determinant)) / 2;

    // Calculate the eigenvectors
    const eigenvector1 = calculateEigenvector(a, b, c, d, lambda1);
    const eigenvector2 = calculateEigenvector(a, b, c, d, lambda2);

    // Display results
    document.getElementById('eigenvalues').innerText = `Eigenvalues: λ1 = ${lambda1}, λ2 = ${lambda2}`;
    document.getElementById('eigenvectors').innerText = `Eigenvectors: v1 = [${eigenvector1}], v2 = [${eigenvector2}]`;
}

function calculateEigenvector(a, b, c, d, lambda) {
    // For a 2x2 matrix, solve (A - λI)v = 0
    const matrix = [
        [a - lambda, b],
        [c, d - lambda]
    ];

    // Find a non-trivial solution
    if (b !== 0) {
        const v1 = 1;
        const v2 = (lambda - a) / b;
        return `${v1}, ${v2}`;
    } else if (c !== 0) {
        const v1 = (lambda - d) / c;
        const v2 = 1;
        return `${v1}, ${v2}`;
    } else {
        // This should not happen for a well-formed eigenvalue problem
        return 'undefined';
    }
}
