window.addEventListener('load', () => {

    
    //Monday:
    const mon001 = sessionStorage.getItem('MON1');
    const mon002 = sessionStorage.getItem('MON2');
    const mon003 = sessionStorage.getItem('MON3');
    const mon004 = sessionStorage.getItem('MON4');
    const mon005 = sessionStorage.getItem('MON5');
    const mon006 = sessionStorage.getItem('MON6');
    const mon007 = sessionStorage.getItem('MON7');
    const mon008 = sessionStorage.getItem('MON8');

    //Tuesday:
    const tue001 = sessionStorage.getItem('TUE1');
    const tue002 = sessionStorage.getItem('TUE2');
    const tue003 = sessionStorage.getItem('TUE3');
    const tue004 = sessionStorage.getItem('TUE4');
    const tue005 = sessionStorage.getItem('TUE5');
    const tue006 = sessionStorage.getItem('TUE6');
    const tue007 = sessionStorage.getItem('TUE7');
    const tue008 = sessionStorage.getItem('TUE8');

    //Wednesday:
    const wed001 = sessionStorage.getItem('WED1');
    const wed002 = sessionStorage.getItem('WED2');
    const wed003 = sessionStorage.getItem('WED3');
    const wed004 = sessionStorage.getItem('WED4');
    const wed005 = sessionStorage.getItem('WED5');
    const wed006 = sessionStorage.getItem('WED6');
    const wed007 = sessionStorage.getItem('WED7');
    const wed008 = sessionStorage.getItem('WED8');

    //Thrusday:
    const thu001 = sessionStorage.getItem('THU1');
    const thu002 = sessionStorage.getItem('THU2');
    const thu003 = sessionStorage.getItem('THU3');
    const thu004 = sessionStorage.getItem('THU4');
    const thu005 = sessionStorage.getItem('THU5');
    const thu006 = sessionStorage.getItem('THU6');
    const thu007 = sessionStorage.getItem('THU7');
    const thu008 = sessionStorage.getItem('THU8');

    //Friday:
    const fri001 = sessionStorage.getItem('FRI1');
    const fri002 = sessionStorage.getItem('FRI2');
    const fri003 = sessionStorage.getItem('FRI3');
    const fri004 = sessionStorage.getItem('FRI4');
    const fri005 = sessionStorage.getItem('FRI5');
    const fri006 = sessionStorage.getItem('FRI6');
    const fri007 = sessionStorage.getItem('FRI7');
    const fri008 = sessionStorage.getItem('FRI8');




    
    //Monday:
    document.getElementById('mon9-10').innerHTML = mon001;
    document.getElementById('mon10-11').innerHTML = mon002;
    document.getElementById('mon11-12').innerHTML = mon003;
    document.getElementById('mon12-1').innerHTML = mon004;
    document.getElementById('mon2-3').innerHTML = mon005;
    document.getElementById('mon3-4').innerHTML = mon006;
    document.getElementById('mon4-5').innerHTML = mon007;
    document.getElementById('mon5-6').innerHTML = mon008;

    //Tuesday:
    document.getElementById('tue9-10').innerHTML = tue001;
    document.getElementById('tue10-11').innerHTML = tue002;
    document.getElementById('tue11-12').innerHTML = tue003;
    document.getElementById('tue12-1').innerHTML = tue004;
    document.getElementById('tue2-3').innerHTML = tue005;
    document.getElementById('tue3-4').innerHTML = tue006;
    document.getElementById('tue4-5').innerHTML = tue007;
    document.getElementById('tue5-6').innerHTML = tue008;

    //Wednesday:
    document.getElementById('wed9-10').innerHTML = wed001;
    document.getElementById('wed10-11').innerHTML = wed002;
    document.getElementById('wed11-12').innerHTML = wed003;
    document.getElementById('wed12-1').innerHTML = wed004;
    document.getElementById('wed2-3').innerHTML = wed005;
    document.getElementById('wed3-4').innerHTML = wed006;
    document.getElementById('wed4-5').innerHTML = wed007;
    document.getElementById('wed5-6').innerHTML = wed008;

    //Thruday:
    document.getElementById('thu9-10').innerHTML = thu001;
    document.getElementById('thu10-11').innerHTML = thu002;
    document.getElementById('thu11-12').innerHTML = thu003;
    document.getElementById('thu12-1').innerHTML = thu004;
    document.getElementById('thu2-3').innerHTML = thu005;
    document.getElementById('thu3-4').innerHTML = thu006;
    document.getElementById('thu4-5').innerHTML = thu007;
    document.getElementById('thu5-6').innerHTML = thu008;

    //Friday:
    document.getElementById('fri9-10').innerHTML = fri001;
    document.getElementById('fri10-11').innerHTML = fri002;
    document.getElementById('fri11-12').innerHTML = fri003;
    document.getElementById('fri12-1').innerHTML = fri004;
    document.getElementById('fri2-3').innerHTML = fri005;
    document.getElementById('fri3-4').innerHTML = fri006;
    document.getElementById('fri4-5').innerHTML = fri007;
    document.getElementById('fri5-6').innerHTML = fri008;

})

window.onload = function(){
    document.getElementById('download')
    .addEventListener('click', () => {
        const invoice = this.document.getElementById('invoice');
        html2pdf().from(invoice).save();

    })
}