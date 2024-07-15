
export function loadImages(r) {
    let images = [];
    r.keys().forEach((item, index) => {
        const name = item.replace('./', '').replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
        images.push({
            src: r(item),
            name: name
        });
    });
    return images;
}


export default loadImages;
