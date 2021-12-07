


// ---------------------------


var totalSeconds = 0;
var viewedSeconds = 0;


function timerChange() {

    // var timerVar = setInterval(countTimer, 1000);
    var stop = document.getElementById("stop_timer");

    timerChange = timerVar;
}
function stopThis() {
    clearInterval(timerChange);
    document.getElementById("start_timer").style.display = "block";
    document.getElementById("stop_timer").style.display = "none";
}
function startThis() {
    timerChange = setInterval(countTimer, 1000);
    document.getElementById("stop_timer").style.display = "block";
    document.getElementById("start_timer").style.display = "none";
}
function resetThis() { window.location.reload(); }
function countTimer() {
    var element = document.getElementById("timer").innerHTML;
    ++totalSeconds;
    viewedSeconds = totalSeconds;

    function whatIf(time) {
        viewedSeconds = viewedSeconds - time;
        element = viewedSeconds;
        time >=20 ? document.body.style.backgroundColor = "green" : document.body.style.backgroundColor = "red";
    }

    if (viewedSeconds >= 30) { whatIf(30);
        if (viewedSeconds >= 5) { whatIf(5);
            if (viewedSeconds >= 30) { whatIf(30);
                if (viewedSeconds >= 6) { whatIf(6);
                    if (viewedSeconds >= 30) { whatIf(30);
                        if (viewedSeconds >= 7) { whatIf(7);
                            if (viewedSeconds >= 20) { whatIf(20);
                                if (viewedSeconds >= 8) { whatIf(8);
                                    if (viewedSeconds >= 20) { whatIf(20);
                                        if (viewedSeconds >= 9) { whatIf(9);
                                            if (viewedSeconds >= 20) { whatIf(20);
                                                if (viewedSeconds >= 10) { whatIf(10);
                                                    if (viewedSeconds >= 20) { whatIf(20);
                                                        if (viewedSeconds >= 10) { whatIf(10);
                                                            if (viewedSeconds >= 20) { whatIf(20);
                                                                if (viewedSeconds >= 15) { whatIf(15);
                                                                    if (viewedSeconds >= 20) {
                                                                        viewedSeconds = viewedSeconds - 20;
                                                                        var hour = Math.floor(viewedSeconds / 3600);
                                                                        var minute = Math.floor((viewedSeconds - hour * 3600) / 60);
                                                                        var seconds = viewedSeconds - (hour * 3600 + minute * 60);
                                                                        if (hour < 10)
                                                                            hour = "0" + hour;
                                                                        if (minute < 10)
                                                                            minute = "0" + minute;
                                                                        if (seconds < 10)
                                                                            seconds = "0" + seconds;
                                                                        var timer = hour + ":" + minute + ":" + seconds;
                                                                        console.log(timer);
                                                                        document.body.style.backgroundColor = "green";
                                                                        var byId = document.getElementById;
                                                                        document.getElementById("timer").innerHTML = timer;
                                                                        document.getElementById("timer").style.fontSize = "80px";
                                                                        document.getElementById("big").style.display = "block";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (timer) {
        document.getElementById("timer").innerHTML = timer;
    } else {
        document.getElementById("timer").innerHTML = viewedSeconds;
    }

    //console.log(viewedSeconds);
    //console.log(totalSeconds);


}
