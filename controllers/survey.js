var db = require('../models');
var Survey = db.Survey;

app.post("/register", function(req, res) {

            db.Survey.create({
                    departure_date: $("#month").val(),
                    question_one: $("#house").val(),
                    question_two: $("#drink").val(),
                    question_three: $("#car").val(),
                    question_four: $("#workout").val(),
                    question_five: $("#clothing").val(),
                }).then(function(dbSurvey) {
                    //calc
                    var question__one_value = req.body.question_one;
                    var question_two_value = req.body.question_two;
                    var question_three_value = req.body.question_three;
                    var question_four_value = req.body.question_four;
                    var question_five_value = req.body.question_five;

                    //calc

                    val = +question_one_value + +question_two_value + +question_three_value + +question_four_value + +questiong_five_value;

                    console.log(val);

                    if (val <= 5) {
                        console.log(Napa);
                    } else if (val >= 6 && val <= 10) {
                        console.log(Sedona);
                    } else if (val >= 11 && val <= 15) {
                        console.log(NYC);
                    } else if (val >= 16 && val <= 20) {
                        console.log(Savannah);
                    } else if (val >= 21 && val <= 25) {
                        console.log(Denver);
                    } else {
                        console.log("No trip for you!");
                    };
                })
                .error(function(err) {
                    res.json(err);
                });
              });