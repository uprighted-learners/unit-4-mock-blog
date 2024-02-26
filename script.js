function render(fi, si) {
    fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`);
}

render(20, 35);
