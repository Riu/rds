window.addEventListener('load', function(){
    function rdsDebugList(el, typeEl) {
        var elStyle = getComputedStyle(el, '::after')
        var els = elStyle.content.replace(/['"]+/g, '').split(' ');
        els.sort()
        for (var e of els) {
            var a = document.createElement('a');
            var textnode = document.createTextNode(e);
            var docPath = '/docs/' + typeEl + '/' + e;
            a.appendChild(textnode);
            a.setAttribute("href", docPath);
            el.appendChild(a);
        }
    }

    // Quarks
    var quarks = document.querySelector('.rds-debug-quarks');
    if(quarks !== null){
        rdsDebugList(quarks, 'quarks');
    }
    // Atoms
    var atoms = document.querySelector('.rds-debug-atoms');
    if(atoms !== null){
        rdsDebugList(atoms, 'atoms');
    }
    // Molecules
    var molecules = document.querySelector('.rds-debug-molecules');
    if(molecules !== null){
        rdsDebugList(molecules, 'molecules');
    }
    // Organisms
    var organisms = document.querySelector('.rds-debug-organisms');
    if(organisms !== null){
        rdsDebugList(organisms, 'organisms');
    }
});