
// var src_url = "http://127.0.0.1:6060/";
// var src_url = "http://172.105.158.108:5500/";


function Load_a_view () {window.location="a.html"}
function Load_b_view () {window.location="b.html"}
function Load_c_view () {window.location="c.html"}
function Load_index () {window.location = "index.html"}
function Load_movie_edits () {window.location = "movieedits.html"}
function Load_pending_movie () {window.location = "viewpending.html"}
function Load_finised_movie () {window.location = "viewfinished.html"}
function Load_developer () {window.location="developer.html"}

function display_date ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id").innerHTML = date;
    
}
function Hide_All_Admin_Divs ()
{
    document.getElementById("add-movies-panel-div").style.display = "none";
    document.getElementById("edit-movies-panel-div").style.display = "none";
    document.getElementById("delete-movies-panel-div").style.display = "none";

    // On add movies ....
    document.getElementById("add-a-movies-div-id").style.display = "none";
    document.getElementById("add-b-movies-div-id").style.display = "none";
    document.getElementById("add-c-movies-div-id").style.display = "none";

    // On Edit Movies ...
    document.getElementById("edit-a-movies-div-id").style.display = "none";
    document.getElementById("edit-b-movies-div-id").style.display = "none";
    document.getElementById("edit-c-movies-div-id").style.display = "none";

    // On Delete Movies ...
    document.getElementById("delete-a-movies-div-id").style.display = "none";
    document.getElementById("delete-b-movies-div-id").style.display = "none";
    document.getElementById("delete-c-movies-div-id").style.display = "none";

}

// Main Tabs ...................
function Show_add_movies_panel_div ()
{
    document.getElementById("edit-movies-panel-div").style.display = "none";
    document.getElementById("delete-movies-panel-div").style.display = "none";
    document.getElementById("add-movies-panel-div").style.display = "block";    
}
function Show_edit_movies_panel_div ()
{
    document.getElementById("add-movies-panel-div").style.display = "none";
    document.getElementById("delete-movies-panel-div").style.display = "none";
    document.getElementById("edit-movies-panel-div").style.display = "block";    
}
function Show_delete_movies_panel_div ()
{
    document.getElementById("edit-movies-panel-div").style.display = "none";
    document.getElementById("add-movies-panel-div").style.display = "none";
    document.getElementById("delete-movies-panel-div").style.display = "block";    
}

// Sub-Main Add Tabs ...................
function Show_add_a_movies_div_id ()
{
    document.getElementById("add-b-movies-div-id").style.display = "none";
    document.getElementById("add-c-movies-div-id").style.display = "none";
    document.getElementById("add-a-movies-div-id").style.display = "block";
} 
function Show_add_b_movies_div_id ()
{
    document.getElementById("add-a-movies-div-id").style.display = "none";
    document.getElementById("add-c-movies-div-id").style.display = "none";
    document.getElementById("add-b-movies-div-id").style.display = "block";
} 

function Show_add_c_movies_div_id ()
{
    document.getElementById("add-a-movies-div-id").style.display = "none";
    document.getElementById("add-b-movies-div-id").style.display = "none";
    document.getElementById("add-c-movies-div-id").style.display = "block";
} 


// Sub-Main Edit Tabs ...................
function Show_edit_a_movies_div_id ()
{
    document.getElementById("edit-b-movies-div-id").style.display = "none";
    document.getElementById("edit-c-movies-div-id").style.display = "none";
    document.getElementById("edit-a-movies-div-id").style.display = "block";
} 
function Show_edit_b_movies_div_id ()
{
    document.getElementById("edit-a-movies-div-id").style.display = "none";
    document.getElementById("edit-c-movies-div-id").style.display = "none";
    document.getElementById("edit-b-movies-div-id").style.display = "block";
} 

function Show_edit_c_movies_div_id ()
{
    document.getElementById("edit-a-movies-div-id").style.display = "none";
    document.getElementById("edit-b-movies-div-id").style.display = "none";
    document.getElementById("edit-c-movies-div-id").style.display = "block";
} 

// Sub-Main Delete Tabs ...................
function Show_delete_a_movies_div_id ()
{
    document.getElementById("delete-b-movies-div-id").style.display = "none";
    document.getElementById("delete-c-movies-div-id").style.display = "none";
    document.getElementById("delete-a-movies-div-id").style.display = "block";
} 
function Show_delete_b_movies_div_id ()
{
    document.getElementById("delete-a-movies-div-id").style.display = "none";
    document.getElementById("delete-c-movies-div-id").style.display = "none";
    document.getElementById("delete-b-movies-div-id").style.display = "block";
} 

function Show_delete_c_movies_div_id ()
{
    document.getElementById("delete-a-movies-div-id").style.display = "none";
    document.getElementById("delete-b-movies-div-id").style.display = "none";
    document.getElementById("delete-c-movies-div-id").style.display = "block";
} 

function Indexpage_Hide_All_Movies_Divs ()
{
    document.getElementById("orders-panel-div").style.display = "none";
}
function Show_orders_panel_div (){document.getElementById("orders-panel-div").style.display = "block";}
