
//api call to get metrics from db to display in UI
$.get("/api/metric", function (data) {
    // console.log(data);

    //create the ui, put the metric ids in an attribute
    for (var i = 0; i < data.length; i++) {
        if (data[i].categoryDescription === 'Advanced Stats') {
            $('#advancedStatsList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='advancedStats${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
        if (data[i].categoryDescription === 'Balance Sheet') {
            $('#balanceSheetList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='balanceSheet${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
        if (data[i].categoryDescription === 'Key Stats') {
            $('#keyStatsList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='keyStats${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
        if (data[i].categoryDescription === 'Cash Flow Statement') {
            $('#cashFlowStatementList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='cashFlowStatement${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
        if (data[i].categoryDescription === 'Estimates') {
            $('#estimatesList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='estimates${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
        if (data[i].categoryDescription === 'Income Statement') {
            $('#incomeStatementList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='incomeStatementList${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
        if (data[i].categoryDescription === 'Financial Statements') {
            $('#financialStatementsList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='financialStatementsList${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
        if (data[i].categoryDescription === 'Price Target') {
            $('#priceTargetList').append(`<li class="list-group-item metricName"><label><input type="checkbox"
                                            class='addMetric' id='priceTarget${i}' name='metric' metricId='${data[i].id}' value='${data[i].metricDescription}'> ${data[i].metricDescription}</label>
                                </li>`)
        }
    }
});

//get all data from templateuser to make the buttons
var buttonText = [];
setTimeout(function () {
    $.get(`/api/templateuser/${currentUser}`, function (data) {
        // console.log("this is my user id " + currentUser);
        for (var i = 0; i < data.length; i++) {
            $("#viewTemplatesToEdit").append(`<button onclick="viewExistingTemplate(this)" value="${data[i].id}" type="button" class="list-group-item list-group-item-action lead editingTemplate bg-warning">${data[i].templatename}</button>`);
            buttonText.push(data[i].templatename);
        }
    });
}, 1000);

//update existing template post request
function viewExistingTemplate(e) {
    $(".addMetric").removeAttr('checked', '');
    // console.log(customTemplateMetrics);
    var metricIdToCheck;
    // console.log($(e).attr("value"));
    var metricNumber = $(e).attr("value");
    //hide the save button and show the update button (will write a put on click of the update button)
    $("#saveCustomTemplateButton").hide();
    $("#updateCustomTemplateButton").show();

    //get that templates info from DB and recheck boxes
    $.get(`/api/templatemetric/${metricNumber}`, function (data) {
        // console.log(data);

        //check all the metric boxes for the template that was clicked to edit
        for (var i = 0; i < data.length; i++) {
            metricIdToCheck = data[i].MetricId;
            $(".addMetric").each(function () {
                if ($(this).attr('metricId') == metricIdToCheck) {
                    $(this).attr('checked', '');
                };
            })
        };
        //fill in the name input with that templates name
        // console.log(data[0].templatename);
        $("#customTemplateName").val(data[0].templatename);
    });
}

var customTemplateMetrics = [];
var customTemplateName = "";
var uid;
var customTemplateMetricIds = [];


function validateForm() {
    if ($("#customTemplateName").val() === "") {
        $("#viewCustomTemplate").attr("data-target", "");
        $("#customTemplateName").addClass("is-invalid");
        $("#error").show();
        $('.viewMetricChild').remove();
        customTemplateMetrics = [];

    } else {
        $("#viewCustomTemplate").attr("data-target", "#exampleModal");
        $("#customTemplateName").removeClass("is-invalid");
        $("#error").hide();

    };
}

//on click view custom template, checked metrics are made into table on modal
$("#viewCustomTemplate").on("click", function () {
    validateForm();

    if (buttonText.includes($("#customTemplateName").val())) {
        // console.log("itcontains");
        $("#saveCustomTemplateButton").hide();
        $("#updateCustomTemplateButton").show();
    }

    // console.log($(this).val());
    var metricIsChecked = $(".addMetric").is(":checked");
    // console.log(metricIsChecked);

    //create an array with all of the selected metrics
    $.each($("input[name='metric']:checked"), function () {
        customTemplateMetrics.push($(this).val());
        customTemplateMetricIds.push($(this).attr('metricId'));
    });
    // console.log(customTemplateMetrics)

    //retrieving name of the template
    customTemplateName = $('#customTemplateName').val().trim();
    $('#inputTemplateName').html(customTemplateName);
    // console.log(customTemplateName);


    //creating the demo template to view
    for (var i = 0; i < customTemplateMetrics.length; i++) {
        if (i < 2) {
            $('#viewMetricAddedCol1').append(`<td class="viewMetricChild">${customTemplateMetrics[i]}</td>`);
        } else if (i < 4) {
            $('#viewMetricAddedCol2').append(`<td class="viewMetricChild">${customTemplateMetrics[i]}</td>`);
        } else if (i < 6) {
            $('#viewMetricAddedCol3').append(`<td class="viewMetricChild">${customTemplateMetrics[i]}</td>`);
        } else if (i < 8) {
            $('#viewMetricAddedCol4').append(`<td class="viewMetricChild">${customTemplateMetrics[i]}</td>`);
        } else if (i < 10) {
            $('#viewMetricAddedCol5').append(`<td class="viewMetricChild">${customTemplateMetrics[i]}</td>`);
        }
    };
    // console.log(customTemplateMetrics);

    templatePostArray = [];
    var customTemplate;
    var metricIdArray = [];

    //create an array of objects to be posted into templatemetrics table
    for (var i = 0; i < customTemplateMetrics.length; i++) {
        // console.log(currentUser);
        customTemplate = { UserUid: currentUser, templatename: customTemplateName, MetricId: customTemplateMetricIds[i] }
        templatePostArray.push(customTemplate)
        metricIdArray.push(customTemplateMetricIds[i])
    };
    templatePostArray = { "": templatePostArray };


    //on save, make a post to the database
    $("#saveCustomTemplateButton").on("click", function () {
        $.post("/api/template/", templatePostArray)
            .then(function (results) {
                // console.log(results)
            });

        //clear template
        $('.viewMetricChild').remove();
        customTemplateMetrics = [];
        $(".addMetric").checked = false;
        location.reload();
    });


    //make a put call to DB to update existing template
    $("#updateCustomTemplateButton").on("click", function () {
        var templateNameEdit = $(inputTemplateName).html();
        // console.log(templateNameEdit);
        $.post(`/api/template/${templateNameEdit}`, templatePostArray)
            .then(function (results) {
                // console.log(results)
            });

        //clear template
        $('.viewMetricChild').remove();
        customTemplateMetrics = [];
        $(".addMetric").checked = false;
        location.reload();
    });


    //make post request to clear existing template from db
    $("#deleteCustomTemplateButton").on("click", function () {
        var templateNameEdit = $(inputTemplateName).html();
        $.post(`/api/template/delete/${templateNameEdit}`, function (result) {
            // console.log(result);
        })
        $('.viewMetricChild').remove();
        customTemplateMetrics = [];
        location.reload();
    });

    //clear template
    $("#close-x").on("click", function () {
        // console.log("ITHASBEENCLICKED");
        $('.viewMetricChild').remove();
        customTemplateMetrics = [];
        location.reload();
    });

});
//modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

$('#exampleModal').on('hidden.bs.modal', function () {
    location.reload();
});


//list of metrics toggle
$("#advancedStats").on("click", function () {
    $('#advancedStatsMetrics').toggle();
})
$("#balanceSheet").on("click", function () {
    $('#balanceSheetMetrics').toggle();
})
$("#cashFlowStatement").on("click", function () {
    $('#cashFlowStatementMetrics').toggle();
})
$("#incomeStatement").on("click", function () {
    $('#incomeStatementMetrics').toggle();
})
$("#priceTarget").on("click", function () {
    $('#priceTargetMetrics').toggle();
})
$("#keyStats").on("click", function () {
    $('#keyStatsMetrics').toggle();
})
$("#estimates").on("click", function () {
    $('#estimatesMetrics').toggle();
})
$("#financials").on("click", function () {
    $('#financialsMetrics').toggle();
})