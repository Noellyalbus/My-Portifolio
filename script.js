function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;

        function animacaoScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');
            })
        }

        animacaoScroll();
        window.addEventListener('scroll', animacaoScroll);
    }
}
initAnimacaoScroll();
