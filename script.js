function Szamolas(){
    let KapacitNagysag = document.getElementById("KapacitNagysag").value;
    let KapacitFajta = document.getElementById("KapacitFajta").value;
    let AtviteliNagysag = document.getElementById("AtviteliNagysagSlider").value;
    let AtviteliFajta = document.getElementById("AtviteliFajta").value;

    if (KapacitFajta =="GB")
    {
        KapacitNagysag = KapacitNagysag * 1000;
    }
    else if (KapacitFajta == "TB")
    {
        KapacitNagysag = KapacitNagysag * 1000000;
    }

    if (AtviteliFajta == "GBps")
    {
        AtviteliNagysag = AtviteliNagysag * 1000;
    }
    else if (AtviteliFajta == "KBps")
    {
        AtviteliNagysag = AtviteliNagysag / 1000;
    }
    else if (AtviteliFajta == "Mbps")
    {
        AtviteliNagysag = AtviteliNagysag / 8;
    }

    let eredmeny = KapacitNagysag / AtviteliNagysag;

    document.getElementById("EredmenyKiir").innerHTML = eredmeny + "sec";



}

function Kiir(){
    let slider = document.getElementById("AtviteliNagysagSlider").value;
    document.getElementById("SliderErtek").innerHTML = slider;

}

document.querySelectorAll('input[type="range"]').forEach((input) => { 
    input.addEventListener('mousedown',  () => window.getSelection().removeAllRanges());
});