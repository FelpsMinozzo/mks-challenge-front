const toggleAnimation = (value) => {
    const Sidebar = document.getElementById('slide');

    const classMap = {
        0: ['slide1', 'slide2'],
        1: ['slide2', 'slide1'],
    };

    if (value in classMap) {
        const [classToRemove, classToAdd] = classMap[value];
        Sidebar.classList.remove(classToRemove);
        Sidebar.classList.add(classToAdd);
    }

};

export default toggleAnimation;