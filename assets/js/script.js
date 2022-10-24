//inicio do slide principal (HOME)
function active1() {
    limpar();
    document.getElementById('pointer1').classList.add('active');
    document.getElementById('sliders').style.marginLeft = '0';
}
function active2() {
    limpar();
    document.getElementById('pointer2').classList.add('active');
    document.getElementById('sliders').style.marginLeft = '-100vw';
}
function active3() {
    limpar();
    document.getElementById('pointer3').classList.add('active');
    document.getElementById('sliders').style.marginLeft = '-200vw';
}
function limpar() {
    document.getElementById('pointer1').classList.remove('active');
    document.getElementById('pointer2').classList.remove('active');
    document.getElementById('pointer3').classList.remove('active');
}
//fim do slide principal

//inicio do slide da sessão OUR TEAM
function activeTeam1() {
    limpar2();
    document.getElementById('pointerTeam1').classList.add('active');
    document.getElementById('slidersTeam').style.marginLeft = '0';
}
function activeTeam2() {
    limpar2();
    document.getElementById('pointerTeam2').classList.add('active');
    document.getElementById('slidersTeam').style.marginLeft = '-904px';
}
function activeTeam3() {
    limpar2();
    document.getElementById('pointerTeam3').classList.add('active');
    document.getElementById('slidersTeam').style.marginLeft = '-1808px';
}
function limpar2() {
    document.getElementById('pointerTeam1').classList.remove('active');
    document.getElementById('pointerTeam2').classList.remove('active');
    document.getElementById('pointerTeam3').classList.remove('active');
}
//fim do slide da sessão OUR TEAM

//inicio do slide da sessão HAPPY CLIENTS
function activeHappy1() {
    limpar3();
    document.getElementById('pointerHappy1').classList.add('active');
    document.getElementById('sliderHappy').style.marginLeft = '0';
}
function activeHappy2() {
    limpar3();
    document.getElementById('pointerHappy2').classList.add('active');
    document.getElementById('sliderHappy').style.marginLeft = '-624px';
}
function activeHappy3() {
    limpar3();
    document.getElementById('pointerHappy3').classList.add('active');
    document.getElementById('slidersHappy').style.marginLeft = '-1248px';
}
function limpar3() {
    document.getElementById('pointerHappy1').classList.remove('active');
    document.getElementById('pointerHappy2').classList.remove('active');
    document.getElementById('pointerHappy3').classList.remove('active');
}
//fim do slide da sessão HAPPY CLIENTS

//inicio do slide da sessão PREMIUM
function activePremium1() {
    limpar4();
    document.getElementById('pointerPremium1').classList.add('active');
    document.getElementById('sliderPremium').style.marginLeft = '0';
}
function activePremium2() {
    limpar4();
    document.getElementById('pointerPremium2').classList.add('active');
    document.getElementById('sliderPremium').style.marginLeft = '-100vw';
}
function activePremium3() {
    limpar4();
    document.getElementById('pointerPremium3').classList.add('active');
    document.getElementById('sliderPremium').style.marginLeft = '-200vw';
}
function limpar4() {
    document.getElementById('pointerPremium1').classList.remove('active');
    document.getElementById('pointerPremium2').classList.remove('active');
    document.getElementById('pointerPremium3').classList.remove('active');
}
//fim do slide da sessão PREMIUM