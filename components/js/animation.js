const toggleAnimation = (value) => {
    const Sidebar = document.getElementById('slide');
    
    if(value === 0){
        Sidebar.classList.remove('slide1');
        Sidebar.classList.add('slide2');
    } else if(value === 1){
        Sidebar.classList.remove('slide2');
        Sidebar.classList.add('slide1');
    };
};

export default toggleAnimation;