function handleSubmit () {
    //Monday:
    const mon01 = document.getElementById('name01').value;
    const mon02 = document.getElementById('name02').value;
    const mon03 = document.getElementById('name03').value;
    const mon04 = document.getElementById('name04').value;
    const mon05 = document.getElementById('name05').value;
    const mon06 = document.getElementById('name06').value;
    const mon07 = document.getElementById('name07').value;
    const mon08 = document.getElementById('name08').value;

    //Tuesday:
    const tue01 = document.getElementById('name11').value;
    const tue02 = document.getElementById('name12').value;
    const tue03 = document.getElementById('name13').value;
    const tue04 = document.getElementById('name14').value;
    const tue05 = document.getElementById('name15').value;
    const tue06 = document.getElementById('name16').value;
    const tue07 = document.getElementById('name17').value;
    const tue08 = document.getElementById('name18').value;

    //Wednesday:
    const wed01 = document.getElementById('name21').value;
    const wed02 = document.getElementById('name22').value;
    const wed03 = document.getElementById('name23').value;
    const wed04 = document.getElementById('name24').value;
    const wed05 = document.getElementById('name25').value;
    const wed06 = document.getElementById('name26').value;
    const wed07 = document.getElementById('name27').value;
    const wed08 = document.getElementById('name28').value;

    //Thrusday:
    const thu01 = document.getElementById('name31').value;
    const thu02 = document.getElementById('name32').value;
    const thu03 = document.getElementById('name33').value;
    const thu04 = document.getElementById('name34').value;
    const thu05 = document.getElementById('name35').value;
    const thu06 = document.getElementById('name36').value;
    const thu07 = document.getElementById('name37').value;
    const thu08 = document.getElementById('name38').value;

    //Wednesday:
    const fri01 = document.getElementById('name41').value;
    const fri02 = document.getElementById('name42').value;
    const fri03 = document.getElementById('name43').value;
    const fri04 = document.getElementById('name44').value;
    const fri05 = document.getElementById('name45').value;
    const fri06 = document.getElementById('name46').value;
    const fri07 = document.getElementById('name47').value;
    const fri08 = document.getElementById('name48').value;


    //Monday:
    sessionStorage.setItem("MON1", mon01);
    sessionStorage.setItem("MON2", mon02);
    sessionStorage.setItem("MON3", mon03);
    sessionStorage.setItem("MON4", mon04);
    sessionStorage.setItem("MON5", mon05);
    sessionStorage.setItem("MON6", mon06);
    sessionStorage.setItem("MON7", mon07);
    sessionStorage.setItem("MON8", mon08);

    //Tuesday:
    sessionStorage.setItem("TUE1", tue01);
    sessionStorage.setItem("TUE2", tue02);
    sessionStorage.setItem("TUE3", tue03);
    sessionStorage.setItem("TUE4", tue04);
    sessionStorage.setItem("TUE5", tue05);
    sessionStorage.setItem("TUE6", tue06);
    sessionStorage.setItem("TUE7", tue07);
    sessionStorage.setItem("TUE8", tue08);


    //Wednesday:
    sessionStorage.setItem("WED1", wed01);
    sessionStorage.setItem("WED2", wed02);
    sessionStorage.setItem("WED3", wed03);
    sessionStorage.setItem("WED4", wed04);
    sessionStorage.setItem("WED5", wed05);
    sessionStorage.setItem("WED6", wed06);
    sessionStorage.setItem("WED7", wed07);
    sessionStorage.setItem("WED8", wed08);

    //Thrusday:
    sessionStorage.setItem("THU1", thu01);
    sessionStorage.setItem("THU2", thu02);
    sessionStorage.setItem("THU3", thu03);
    sessionStorage.setItem("THU4", thu04);
    sessionStorage.setItem("THU5", thu05);
    sessionStorage.setItem("THU6", thu06);
    sessionStorage.setItem("THU7", thu07);
    sessionStorage.setItem("THU8", thu08);

    //Friday:
    sessionStorage.setItem("FRI1", fri01);
    sessionStorage.setItem("FRI2", fri02);
    sessionStorage.setItem("FRI3", fri03);
    sessionStorage.setItem("FRI4", fri04);
    sessionStorage.setItem("FRI5", fri05);
    sessionStorage.setItem("FRI6", fri06);
    sessionStorage.setItem("FRI7", fri07);
    sessionStorage.setItem("FRI8", fri08);

    return;
}