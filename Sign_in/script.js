
    document.body.addEventListener('input',() => {
        if(document.getElementById("Password").value === document.getElementById("Conpass").value)
        {
            document.getElementById("Warning").textContent = "";
            document.getElementById("submit").style.display = "block";
        }
        else
        {
            document.getElementById("Warning").textContent = "Password not matching";
            document.getElementById("Warning").style.color = "red";
            document.getElementById("submit").style.display = "none";
        }
    })

let inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach(input=>{
    input.addEventListener('focusin',()=>{
        const inputid = input.id;
        const colour = "lightgreen";
        function input_bottom_border_bolder(){
            let input_id = document.getElementById(inputid)
            input_id.style.borderBottom = "2.5px solid lightblue";
            input_id.style.color = "white";
        }

        switch(inputid)
        {
            case 'Name':
                let one1 = document.getElementById("one");
                one1.style.transform = "translateY(0rem)";
                one1.style.fontWeight = "bold";
                one1.style.color = colour;
                input_bottom_border_bolder();
                break;
            case 'Email':
                let two2 = document.getElementById("two");
                two2.style.transform = "translateY(0rem)";
                two2.style.fontWeight = "bold";
                two2.style.color = colour;
                input_bottom_border_bolder();
                break;
            case 'Password':
                let three3 = document.getElementById("three");
                three3.style.transform = "translateY(0rem)";
                three3.style.fontWeight = "bold";
                three3.style.color = colour;
                input_bottom_border_bolder();
                break;
            case 'Conpass':
                let four4 = document.getElementById("four");
                four4.style.transform = "translateY(0rem)";
                four4.style.fontWeight = "bold";
                four4.style.color = colour;
                input_bottom_border_bolder();
                break;
            default:
                break;
        }
    })

})

inputs.forEach((input)=>{
    input.addEventListener('focusout',()=>{
        const inputid = input.id;
        const setcolour = "white";

        function input_bottom_border_lighter(){
            let input_id = document.getElementById(inputid)
            input_id.style.borderBottom = "2px solid white";
            input_id.style.color ="transparent";
        }

        
        switch(inputid)
        {
            case 'Name':
                    let one = document.getElementById("one");
                    one.style.fontWeight = "normal";
                    one.style.color = setcolour;
                    input_bottom_border_lighter();
                    one.style.transform = "translateY(1.5rem)";
                    break;                
            case 'Email':
                    let two = document.getElementById("two");
                    two.style.fontWeight = "normal";
                    two.style.color = setcolour;
                    input_bottom_border_lighter();
                    two.style.transform = "translateY(1.5rem)";
                    break;
            case 'Password':
                    let three = document.getElementById("three");
                    three.style.fontWeight = "normal";
                    three.style.color = setcolour;
                    input_bottom_border_lighter();
                    three.style.transform = "translateY(1.5rem)";
                    break;
            case 'Conpass':
                    let four = document.getElementById("four");
                    four.style.fontWeight = "normal";
                    four.style.color = setcolour;
                    input_bottom_border_lighter();
                    four.style.transform = "translateY(1.5rem)";
                    break;
            default:
                break;
        }
    })
})