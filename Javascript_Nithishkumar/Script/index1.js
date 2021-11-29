function f1()
{
    var uname=document.getElementById("uname");
    var fathername=document.getElementById("fname");
    var email=document.getElementById("eml");
    var dob = document.getElementById("dob");
    dob=/[0-31]-[1-12]-[0-2099]/;
    var mob=document.getElementById("mob");
    mob=/[6-9]{9}/;
    var CurrAddr=document.getElementById("cAddr");
    var PermAddr=document.getElementById("pAddr");
    var city=document.getElementById("cty");
    var pincode=document.getElementById("pin");
    pincode=/600[0-9][0-9][0-9]/;
    var photo=document.getElementById("pho");
    if(uname.value=="")
    {
        uname.style.border="solid 2px red"
        document.getElementById("lbl1")
        .style.visibility="visible";
        return false;   
    }
    else if(fathername.value.trim()=="")
    {
        fathername.style.border="solid 2px red"
        document.getElementById("lbl2")
        .style.visibility="visible";
        return false;
    }
    else if(email.value.trim()=="")
    {
        email.style.border="solid 2px red"
        document.getElementById("lbl3")
        .style.visibility="visible";
        return false;
    }
    else if(dob.value.trim()==""||dob.value==/[^/a-z]-[^/a-z]-[^/a-z]/)
    {
        dob.style.border="solid 2px red"
        document.getElementById("lbl4")
        .style.visibility="visible";
        return false;
    }
    else if(mob.value.trim()==""||mob.value==/[^/a-z]/)
    {
        mob.style.border="solid 2px red"
        document.getElementById("llb")
        .style.visibility="visible";
        return false;
    }
    else if(CurrAddr.value.trim()=="")
    {
        CurrAddr.style.border="solid 2px red"
        document.getElementById("lbl5")
        .style.visibility="visible";
        return false;
    }
    else if(PermAddr.value.trim()=="")
    {
        PermAddr.style.border="solid 2px red"
        document.getElementById("lb1")
        .style.visibility="visible";
        return false;
    }
    else if(city.value.trim()=="")
    {
        city.style.border="solid 2px red"
        document.getElementById("lb2")
        .style.visibility="visible";
        return false;
    }
    else if(pincode.value.trim()=="")
    {
        pincode.style.border="solid 2px red"
        document.getElementById("lb3")
        .style.visibility="visible";
        return false;
    }
    else if(photo.value.trim()=="")
    {
        photo.style.border="solid 2px red"
        document.getElementById("lb4")
        .style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
}


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  