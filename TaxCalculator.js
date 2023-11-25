let hideBool=false;
$(document).ready(function(){
    
    $("#submit").click(function(){
        
        var tax=0;
        var sum=0;
       let income=myFunction();
        for(var i=0;i<12;i++){
           var b=0;
           if(hideBool===false){
            b=income[i]
           }
           else if(hideBool===true){
               b=document.getElementById("bsalary").value;
           }

        if(b<=6220){
            tax=b*(10/100);
            sum=tax+sum;
        }
        if(b>6220&&b<=8920){
            tax=622+((b-6220)*(14/100));
            sum=tax+sum;
        }
        if(b>8920&&b<=14230){
            tax=(622+378)+((b-8920)*(20/100)); 
            sum=tax+sum;
        }
        if(b>14320&&b<=19900){
            tax=(622+378+1080)+((b-14320)*(31/100));
            sum=tax+sum;
        }
        if(b>19900&&b<=41410){
            tax=(622+378+1080+1729.8)+((b-19900)*(35/100)); 
            sum=tax+sum;
        }
        if(b>41410&&b<=53333){
            tax=(622+378+1080+1729.8+7528.5)+((b-41410)*(47/100)); 
            sum=tax+sum;
        }
        if(b>53333){
            tax=(622+378+1080+1729.8+7528.5+5603.81)+((b-53333)*(50/100));
            sum=tax+sum;
        }
        
    }
    let bonus=document.getElementById("Bpoints").value;
    bonus=bonus*2580;
    sum=sum-bonus;
    if(sum<0)
        sum=0;
    $('#tax').text("Total Tax is: "+sum);
    
        $("#tax").val(tax)})});
       

        function myFunction(){
            let income=[];
            let a=parseInt(document.getElementById("1").value);
            let b=parseInt(document.getElementById("2").value);
            let c=parseInt(document.getElementById("3").value);
            let d=parseInt(document.getElementById("4").value);
            let e=parseInt(document.getElementById("5").value);
            let f=parseInt(document.getElementById("6").value);
            let g=parseInt(document.getElementById("7").value);
            let h=parseInt(document.getElementById("8").value);
            let i=parseInt(document.getElementById("9").value);
            let j=parseInt(document.getElementById("10").value);
            let k=parseInt(document.getElementById("11").value);
            let l=parseInt(document.getElementById("12").value);
            income[0]=a;
            income[1]=b;
            income[2]=c;
            income[3]=d;
            income[4]=e;
            income[5]=f;
            income[6]=g;
            income[7]=h;
            income[8]=i;
            income[9]=j;
            income[10]=k;
            income[11]=l;
            return income;
        }
function hide(){
    let vis=document.getElementById("inputHide").className;
    if(vis==="hidden"){
        hideBool=false;
        document.getElementById("inputHide").classList.add("shown");
    }
    else {
        hideBool=true;
        document.getElementById("inputHide").classList.remove("shown");
        document.getElementById("inputHide").classList.add("hidden");
    }
      
}