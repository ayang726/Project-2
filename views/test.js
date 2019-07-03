///////////////////////////////////////////drag and drop package???///////////////////////////////////

//////////////////////////api get metrics from db to display////////////////////////////////////

// $.get("/api/metric", function (data) {
//     console.log("Metrics", data);
//     //create the ui, put the metric ids in an attribute
// });


//////////////////////////////////////////////////////////////UI display/////////////////////////////////////////////////////////
//on save if on clicked is true push into array or object or something, display on screen and make api request
var customTemplateMetrics = [];
var customTemplateName = "";

//on click view custom template, checked metrics are made into table on modal
$("#viewCustomTemplate").on("click", function () {
    console.log($(this).val());
    var metricIsChecked = $(".addMetric").is(":checked");
    console.log(metricIsChecked);

    $.each($("input[name='metric']:checked"), function () {
        customTemplateMetrics.push($(this).val());
    });
    console.log(customTemplateMetrics)
    customTemplateName = $('#customTemplateName').val().trim();
    $('#inputTemplateName').html(customTemplateName);

    for (var i = 0; i < customTemplateMetrics.length; i++) {
        if (i < 2) {
            $('#viewMetricAddedCol1').append(`<td>${customTemplateMetrics[i]}</td>`);
        } else if (i < 4) {
            $('#viewMetricAddedCol2').append(`<td>${customTemplateMetrics[i]}</td>`);
        } else if (i < 6) {
            $('#viewMetricAddedCol3').append(`<td>${customTemplateMetrics[i]}</td>`);
        } else if (i < 8) {
            $('#viewMetricAddedCol4').append(`<td>${customTemplateMetrics[i]}</td>`);
        } else if (i < 10) {
            $('#viewMetricAddedCol5').append(`<td>${customTemplateMetrics[i]}</td>`);
        }

    };
});


//on save, make a post to the database
$("#saveCustomTemplateButton").on("click", function () {

})



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})




//////////////////////////////////////////list of metrics toggle///////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////api////////////////////////////////////////////////////

// on click save template, pull the input of template name and metrics and post it to the the template metric api, which then adds it
// to the database
// on click save template, pull the template name and post it to the template user api, which then adds it to the database 
// function createTemplate() {
//     $.post("/api/template", Data)
//         .then(results) {


//     };

// }


