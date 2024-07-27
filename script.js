document.addEventListener('DOMContentLoaded', function() {
    const designs = [
        {
            name: 'Design 1',
            warp: '40/60 Citra H.M (Catonic)',
            weft: '36/20 PV H.M (Catonic)',
            weight: '11+',
            rate: '35/-',
            img: 'design1.jpg'
        },
        {
            name: 'Design 2',
            warp: '30/60 Monalisa Blue',
            weft: '30 Single Monalisa Blue',
            weight: '11+',
            rate: '35/-',
            img: 'design2.jpg'
        }
        // Add more designs as needed
    ];

    const designContainer = document.querySelector('.design-container');

    designs.forEach(design => {
        const designItem = document.createElement('div');
        designItem.classList.add('design-item');

        designItem.innerHTML = `
            <img src="${design.img}" alt="${design.name}">
            <h3>${design.name}</h3>
            <p><strong>Warp:</strong> ${design.warp}</p>
            <p><strong>Weft:</strong> ${design.weft}</p>
            <p><strong>Avg Weight:</strong> ${design.weight}</p>
            <p><strong>Rate:</strong> ${design.rate}</p>
        `;

        designContainer.appendChild(designItem);
    });
});
