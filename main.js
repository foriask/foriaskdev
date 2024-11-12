const texts = [ `Lunar brighness is enough for my station, oxigen is very low, snow is all in the window.`,
                `Oxigen is going up, nitrogen isn't, solar light is beaming, it's half productivity time.`,
                `Sun is overpower now, bateries are charging, hapinnes is ok.`,
                `Nitrogen is winning the battle, solar light is underpowered, it's almost impossible to be happy.`];

function get_text(_a){
    const length = texts.length;

    const date = new Date();

    const n = Math.ceil(((date.getHours()+0.1)/(24/length))-1);
    return texts[n];
}

function change_text(){
    const text_holder = document.getElementById("textico");
    text_holder.innerText = get_text(text_holder);
} 

change_text();
setInterval(change_text, 1800000);