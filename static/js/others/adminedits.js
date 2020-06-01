
var edit_url = "http://192.168.43.140:6060/";
// var edit_url = "http://172.105.158.108:6060/";


var seconds = 1000;
var loader_seconds = 3000;

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

    // ==================
function Fetch_All_Avenue_Edits (endpoit,avenuetbody,avenuetbodydiv)
    {
        let req = new XMLHttpRequest();
        req.open('post', edit_url+endpoit,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length){alert("No results found")}
                else
                    {
                        let tbody = document.getElementById(avenuetbody);
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Key","Name","Price"]);
                        let columns_to_count = th_names[0].length;
                        row = tbody.insertRow(-1); 
                        for (let looper =0; looper<columns_to_count; ++looper)
                            {
                                let headerNames = document.createElement("th");
                                headerNames.className='js_table_headers'
                                headerNames.innerHTML = th_names[0][looper];
                                row.appendChild(headerNames)
                            }
    
                        for (let table_row = 0; table_row < results.length; ++table_row)
                            {
                                tr = document.createElement('tr');
                                tr.className='js_table_row';
                                for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                    {
                                        td = document.createElement('td');
                                        td.setAttribute("align", "center"); 
                                        td.innerHTML = results[table_row][table_data];
                                        tr.appendChild(td)
                                    }
                                    tbody.appendChild(tr)
                            }
                    }
            }
            let div_tag = document.getElementById(avenuetbodydiv);
            req.send(div_tag);  
    }

function Fetch_All_Staffs (endpoit,avenuetbody,avenuetbodydiv)
{
    let req = new XMLHttpRequest();
    req.open('post', edit_url+endpoit,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    let tbody = document.getElementById(avenuetbody);
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Key","Name","Number"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let div_tag = document.getElementById(avenuetbodydiv);
        req.send(div_tag);  
}

function Hide_all_Admin_Divs ()
{
    // MAINS
    document.getElementById("add-menu-panel-div").style.display="none";
    document.getElementById("edit-menu-panel-div").style.display="none";
    document.getElementById("delete-menu-panel-div").style.display="none";
    document.getElementById("staffs-panel-div").style.display="none";

    // MENU ADD SUB MAIN..
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    
    // MENU EDIT SUB MAIN..
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";

    // MENU DELETE SUB MAIN..
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";

    //STAFFS SUB MAIN ..
    document.getElementById("staffs-add-div-id").style.display = "none";
    document.getElementById("staffs-delete-div-id").style.display = "none";    
}
// STAFFS 
function Show_staffs_add_div_id ()
{
    document.getElementById("staffs-delete-div-id").style.display = "none";
    document.getElementById("staffs-add-div-id").style.display = "block";
}

function Show_staffs_delete_div_id ()
{
    document.getElementById("staffs-add-div-id").style.display = "none";
    document.getElementById("staffs-delete-div-id").style.display = "block";
}
function Show_staffs_panel_div ()
{
    document.getElementById("add-menu-panel-div").style.display = "none";
    document.getElementById("staffs-panel-div").style.display = "block";
}


// MENU ...........
function Show_add_menu_panel_div ()
{
    document.getElementById("edit-menu-panel-div").style.display = "none";
    document.getElementById("delete-menu-panel-div").style.display = "none";    
    document.getElementById("add-menu-panel-div").style.display = "block";
}
function Show_edit_menu_panel_div ()
{
    document.getElementById("add-menu-panel-div").style.display = "none";
    document.getElementById("delete-menu-panel-div").style.display = "none";    
    document.getElementById("edit-menu-panel-div").style.display = "block";
}
function Show_delete_menu_panel_div ()
{
    document.getElementById("edit-menu-panel-div").style.display = "none";
    document.getElementById("add-menu-panel-div").style.display = "none";    
    document.getElementById("delete-menu-panel-div").style.display = "block";
}




// ====================================================================
// MENU ADD
function Show_add_food_div_id ()
{
    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "block";
}

function Show_add_chips_div_id ()
{

    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-chips-div-id").style.display = "block";
}
function Show_add_piloa_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "block";
}

function Show_add_drinks_soft_div_id ()
{
    
    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";;
    document.getElementById("add-drinks-soft-div-id").style.display = "block";
}
function Show_add_drinks_fresh_div_id ()
{
    
    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";;
    document.getElementById("add-drinks-fresh-div-id").style.display = "block";
}

function Show_add_salads_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "block";
}


function Show_add_chicken_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "block";
}

function Show_add_luwombo_div_id ()
{
    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "block";
}

function Show_add_localdishe_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "block";
}

function Show_add_breakfast_other_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "block";
}

function Show_add_breakfast_egg_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "block";
}

function Show_add_breakfast_teas_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "block";
}

function Show_add_beverages_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "block";
}

function Show_add_goatmeat_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "block";
}

function Show_add_beefliver_div_id ()
{

    document.getElementById("add-chips-div-id").style.display = "none";
    document.getElementById("add-drinks-soft-div-id").style.display = "none";
    document.getElementById("add-drinks-fresh-div-id").style.display = "none";
    document.getElementById("add-piloa-div-id").style.display = "none";
    document.getElementById("add-chicken-div-id").style.display = "none";
    document.getElementById("add-luwombo-div-id").style.display = "none";
    document.getElementById("add-localdishe-div-id").style.display = "none";
    document.getElementById("add-breakfast-other-div-id").style.display = "none";
    document.getElementById("add-breakfast-egg-div-id").style.display = "none";
    document.getElementById("add-breakfast-teas-div-id").style.display = "none";
    document.getElementById("add-beverages-div-id").style.display = "none";
    document.getElementById("add-goatmeat-div-id").style.display = "none";
    document.getElementById("add-salads-div-id").style.display = "none";
    document.getElementById("add-food-div-id").style.display = "none";
    document.getElementById("add-beefliver-div-id").style.display = "block";
}







// ====================================================================
// MENU EDIT
// function Show_edit_food_div_id ()
// {
//     document.getElementById("edit-chips-div-id").style.display = "none";
//     document.getElementById("edit-piloa-div-id").style.display = "none";
//     document.getElementById("edit-drinks-soft-div-id").style.display = "none";
//     document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
//     document.getElementById("edit-salads-div-id").style.display = "none";
//     document.getElementById("edit-chicken-div-id").style.display = "none";
//     document.getElementById("edit-luwombo-div-id").style.display = "none";
//     document.getElementById("edit-localdishe-div-id").style.display = "none";
//     document.getElementById("edit-breakfast-other-div-id").style.display = "none";
//     document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
//     document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
//     document.getElementById("edit-beverages-div-id").style.display = "none";
//     document.getElementById("edit-goatmeat-div-id").style.display = "none";
//     document.getElementById("edit-beefliver-div-id").style.display = "none";
//     document.getElementById("edit-food-div-id").style.display = "block";
// }

function Show_edit_chips_div_id ()
{

    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    //  document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-chips-div-id").style.display = "block";
}
function Show_edit_piloa_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "block";
}

function Show_edit_drinks_soft_div_id ()
{
    
    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";;
    document.getElementById("edit-drinks-soft-div-id").style.display = "block";
}
function Show_edit_drinks_fresh_div_id ()
{
    
    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";;
    document.getElementById("edit-drinks-fresh-div-id").style.display = "block";
}

function Show_edit_salads_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "block";
}


function Show_edit_chicken_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "block";
}

function Show_edit_luwombo_div_id ()
{
    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "block";
}

function Show_edit_localdishe_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "block";
}

function Show_edit_breakfast_other_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "block";
}

function Show_edit_breakfast_egg_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "block";
}

function Show_edit_breakfast_teas_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "block";
}

function Show_edit_beverages_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "block";
}

function Show_edit_goatmeat_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "block";
}

function Show_edit_beefliver_div_id ()
{

    document.getElementById("edit-chips-div-id").style.display = "none";
    document.getElementById("edit-drinks-soft-div-id").style.display = "none";
    document.getElementById("edit-drinks-fresh-div-id").style.display = "none";
    document.getElementById("edit-piloa-div-id").style.display = "none";
    document.getElementById("edit-chicken-div-id").style.display = "none";
    document.getElementById("edit-luwombo-div-id").style.display = "none";
    document.getElementById("edit-localdishe-div-id").style.display = "none";
    document.getElementById("edit-breakfast-other-div-id").style.display = "none";
    document.getElementById("edit-breakfast-egg-div-id").style.display = "none";
    document.getElementById("edit-breakfast-teas-div-id").style.display = "none";
    document.getElementById("edit-beverages-div-id").style.display = "none";
    document.getElementById("edit-goatmeat-div-id").style.display = "none";
    document.getElementById("edit-salads-div-id").style.display = "none";
    // document.getElementById("edit-food-div-id").style.display = "none";
    document.getElementById("edit-beefliver-div-id").style.display = "block";
}




// ====================================================================
// MENU DELETE
function Show_delete_food_div_id ()
{
    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "block";
}

function Show_delete_chips_div_id ()
{

    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-chips-div-id").style.display = "block";
}
function Show_delete_piloa_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "block";
}

function Show_delete_drinks_soft_div_id ()
{
    
    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";;
    document.getElementById("delete-drinks-soft-div-id").style.display = "block";
}
function Show_delete_drinks_fresh_div_id ()
{
    
    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";;
    document.getElementById("delete-drinks-fresh-div-id").style.display = "block";
}

function Show_delete_salads_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "block";
}


function Show_delete_chicken_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "block";
}

function Show_delete_luwombo_div_id ()
{
    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "block";
}

function Show_delete_localdishe_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "block";
}

function Show_delete_breakfast_other_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "block";
}

function Show_delete_breakfast_egg_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "block";
}

function Show_delete_breakfast_teas_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "block";
}

function Show_delete_beverages_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "block";
}

function Show_delete_goatmeat_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "block";
}

function Show_delete_beefliver_div_id ()
{

    document.getElementById("delete-chips-div-id").style.display = "none";
    document.getElementById("delete-drinks-soft-div-id").style.display = "none";
    document.getElementById("delete-drinks-fresh-div-id").style.display = "none";
    document.getElementById("delete-piloa-div-id").style.display = "none";
    document.getElementById("delete-chicken-div-id").style.display = "none";
    document.getElementById("delete-luwombo-div-id").style.display = "none";
    document.getElementById("delete-localdishe-div-id").style.display = "none";
    document.getElementById("delete-breakfast-other-div-id").style.display = "none";
    document.getElementById("delete-breakfast-egg-div-id").style.display = "none";
    document.getElementById("delete-breakfast-teas-div-id").style.display = "none";
    document.getElementById("delete-beverages-div-id").style.display = "none";
    document.getElementById("delete-goatmeat-div-id").style.display = "none";
    document.getElementById("delete-salads-div-id").style.display = "none";
    document.getElementById("delete-food-div-id").style.display = "none";
    document.getElementById("delete-beefliver-div-id").style.display = "block";
}