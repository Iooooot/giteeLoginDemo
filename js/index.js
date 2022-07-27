
function login() {
    let username = $("#account").val();
    let password = $("#pwd").val();
    let emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let regPhone = /^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
    if (!emailRegExp.test(username) && !regPhone.test(username)) {
        layer.msg("账号格式错误！！！");
    }
    //发送ajax请求
    let url = "/loginDemo/user/userLogin";
    let args = {
        "username":username,
        "password":password
    };
    $.post(url,args,function (result) {
        if(result.status === "SUCCESS"){
            layer.msg("登录成功!!");
            location.href="index.html";
        }else{
            layer.msg("密码错误!!!");
        }
    });
}