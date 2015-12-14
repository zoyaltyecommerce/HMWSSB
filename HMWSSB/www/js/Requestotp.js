// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        $('#txt_mobile').focus();
        var simno = "123456";
        $(document).ready(function () {
            $('#btn_requestotp').click(function () {

                var mobilenumber = $('#txt_mobile').val();
                if (mobilenumber != "") {
                    if (phonenumber(mobilenumber) == true) {
                        var deviceInfo = cordova.require("cordova/plugin/DeviceInformation");
                        deviceInfo.get(function (result) {
                            var simno = "H3 W01010";
                            //var simno = result.simNo;
                            debugger;
                            if (simno != "" && simno != null) {
                                debugger;
                                $(document).ready(function () {
                                    debugger;
                                    $.ajax({
                                        type: "POST",
                                        url: "http://test.hyderabadwater.gov.in/rwh_webservice/WebService.asmx/OTP",
                                        data: "MobileNo=" + mobilenumber + "&SimNo=" + simno + "", // the data in form-encoded format, ie as it would appear on a querystring
                                        //contentType: "application/x-www-form-urlencoded; charset=UTF-8", // if you are using form encoding, this is default so you don't need to supply it
                                        dataType: "text", // the data type we want back, so text.  The data will come wrapped in xml

                                        success: function (msg) {
                                            debugger;
                                           var xmlDoc = $.parseXML(xml);
                                         
                                            var result = $(msg).find("string").text();
                                            if (result != null && result != "") {

                                            }
                                            alert("success");
                                        },
                                        error: function (msg) {
                                            debugger;
                                            alert('failure');

                                        }
                                    });
                                });
                            }
                            else {
                                alert("Your phone is not supported");
                            }
                        }, function () {
                            debugger;
                            console.log("error");
                        });
                    }
                    else {
                        alert('Enter a valid phone number');
                    }
                }
                else {
                    alert('Enter mobile number');
                }
            });
        });


        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);


        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };
    function phonenumber(inputtxt) {

        var phoneno = /^\d{10}$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {

            return false;
        }
    }
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();