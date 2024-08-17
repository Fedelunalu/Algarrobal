// Historia interactiva con múltiples escenas
const story = {
    start: {
        text: "En la Escuela El Algarrobal en Mendoza, un grupo de estudiantes decide explorar el Bosque Encantado, famoso por sus leyendas y conflictos sociales en la región. El bosque tiene dos caminos: uno sombrío, que es conocido por sus historias oscuras y conflictos históricos, y otro iluminado, que representa la modernidad y la esperanza. ¿Cuál sendero eligen?",
        options: {
            option1: "Tomar el camino sombrío y antiguo, lleno de leyendas y conflictos sociales históricos.",
            option2: "Elegir el sendero iluminado, que simboliza la superación y el desarrollo de Mendoza."
        }
    },
    darkPath1: {
        text: "El camino sombrío se vuelve denso y opresivo. Encuentran un altar antiguo con inscripciones en quechua, reflejando las luchas de las comunidades originarias de Mendoza. ¿Qué hacen?",
        options: {
            option1: "Investigar las inscripciones para aprender sobre las luchas históricas y culturales.",
            option2: "Seguir explorando, evitando involucrarse demasiado en la historia de los conflictos sociales."
        }
    },
    darkPath2: {
        text: "Las inscripciones revelan un antiguo ritual que puede desatar una fuerza benéfica o perjudicial, similar a cómo los conflictos sociales pueden transformar una comunidad. ¿Participan en el ritual?",
        options: {
            option1: "Participar en el ritual, arriesgándose a alterar el equilibrio social y cultural.",
            option2: "Ignorar el ritual y tratar de entender cómo los conflictos históricos han moldeado el presente."
        }
    },
    darkPath3: {
        text: "El ritual provoca una energía oscura que hace que el bosque se torne aún más perturbador. Encuentran una cabaña en la distancia, que podría ofrecer refugio o más pistas sobre la historia oculta del bosque. ¿Qué hacen?",
        options: {
            option1: "Buscar refugio en la cabaña y esperar, tratando de descifrar más sobre los conflictos históricos.",
            option2: "Continuar adentrándose en la oscuridad del bosque, en busca de respuestas sobre los conflictos actuales en Mendoza."
        }
    },
    darkPath4: {
        text: "Dentro de la cabaña, encuentran un templo subterráneo con inscripciones sobre un pacto entre los colonizadores y las comunidades originarias. ¿Qué hacen?",
        options: {
            option1: "Descifrar las inscripciones para entender cómo el pacto afectó la dinámica social de Mendoza.",
            option2: "Explorar el interior del templo en busca de otros secretos que revelen más sobre los conflictos sociales históricos."
        }
    },
    darkPath5: {
        text: "Las inscripciones revelan que el ritual tiene el poder de desatar una fuerza inmensa. Participar en el ritual podría reflejar cómo los conflictos sociales pueden tener efectos profundos y duraderos. ¿Participan en el ritual para intentar controlar la fuerza?",
        options: {
            option1: "Participar en el ritual y asumir el riesgo de alterar el equilibrio social.",
            option2: "Ignorar el ritual y buscar una salida del templo, reflexionando sobre cómo los conflictos han moldeado la identidad cultural."
        }
    },
    lightPath1: {
        text: "En el sendero iluminado, encuentran una cabaña moderna que está llena de estudios sociológicos sobre las leyendas y el desarrollo de Mendoza. ¿Qué hacen?",
        options: {
            option1: "Examinar los documentos para entender cómo las leyendas y conflictos han influido en el desarrollo social.",
            option2: "Continuar explorando el bosque, buscando un equilibrio entre el desarrollo y la tradición."
        }
    },
    lightPath2: {
        text: "En el lago mágico, reflexionan sobre cómo la modernidad y el desarrollo han cambiado la percepción cultural del bosque. ¿Qué hacen?",
        options: {
            option1: "Nadar en el lago y explorar su simbolismo, reflexionando sobre el impacto del desarrollo.",
            option2: "Descansar en la orilla y reflexionar sobre cómo la modernidad ha alterado la identidad cultural de Mendoza."
        }
    },
    lightPath3: {
        text: "Encuentran un viejo diario sobre la evolución de las leyendas del bosque y su impacto en la estructura social y el desarrollo de Mendoza. ¿Qué hacen con esta información?",
        options: {
            option1: "Investigar más sobre el impacto cultural y sociológico, comprendiendo el desarrollo de la región.",
            option2: "Compartir el conocimiento y regresar a la escuela, llevando una nueva perspectiva sobre la influencia de las leyendas."
        }
    },
    end: {
        text: "Finalmente, regresan a la escuela con una comprensión más profunda de la influencia de las leyendas y los conflictos sociales en Mendoza. Fin de la historia. Gracias por jugar.",
        options: {}
    }
};

// Inicializar la historia
let currentScene = 'start';

function continueStory(option) {
    const scene = story[currentScene];
    if (!scene) return;

    // Definir la siguiente escena según la opción seleccionada
    if (currentScene === 'start') {
        currentScene = option === 'option1' ? 'darkPath1' : 'lightPath1';
    } else if (currentScene === 'darkPath1') {
        currentScene = option === 'option1' ? 'darkPath2' : 'lightPath2';
    } else if (currentScene === 'darkPath2') {
        currentScene = option === 'option1' ? 'darkPath3' : 'lightPath3';
    } else if (currentScene === 'darkPath3') {
        currentScene = option === 'option1' ? 'darkPath4' : 'lightPath1';
    } else if (currentScene === 'darkPath4') {
        currentScene = option === 'option1' ? 'darkPath5' : 'lightPath2';
    } else if (currentScene === 'darkPath5') {
        currentScene = 'end';
    } else if (currentScene === 'lightPath1') {
        currentScene = option === 'option1' ? 'lightPath2' : 'lightPath3';
    } else if (currentScene === 'lightPath2') {
        currentScene = option === 'option1' ? 'end' : 'end';
    } else if (currentScene === 'lightPath3') {
        currentScene = 'end';
    }

    updateScene();
}

function updateScene() {
    const scene = story[currentScene];
    const title = document.getElementById('title');
    const text = document.getElementById('text');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    if (scene) {
        title.innerText = 'Historia Interactiva';
        text.innerText = scene.text;
        button1.innerText = scene.options.option1 || '';
        button2.innerText = scene.options.option2 || '';
        button1.style.display = scene.options.option1 ? 'inline-block' : 'none';
        button2.style.display = scene.options.option2 ? 'inline-block' : 'none';
        button1.onclick = () => continueStory('option1');
        button2.onclick = () => continueStory('option2');
    } else {
        title.innerText = 'Fin de la historia';
        text.innerText = 'Gracias por jugar.';
        button1.style.display = 'none';
        button2.style.display = 'none';
    }
}

// Inicializar la historia en la carga de la página
window.onload = () => {
    updateScene();
};
