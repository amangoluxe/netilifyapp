// My Main Javascript file

var formBut = document.getElementById('formul');
formBut.style.display='none';


var delBut = document.getElementById('delbutton')
delBut.style.display = 'none';

var detail = document.getElementById('detl')
detail.style.display = 'none';


$('#addbutton').click(function(){
    formBut.style.display='block';
    detail.style.display = 'none';
});

var i=0;
var nom;
var pnom;
var age;
var adrr;
var sexe;
var see = 'Valeurs par defaut';


$('#savebutton').click(function(){

    i=i+1;
    nom = $('#nom').val();
    pnom = $('#pnom').val();
    age = $('#age').val();
    adrr = $('#adrr').val();
    sexe = $('input[type=radio][name=sexe]:checked').val();

    //ajout de la nouvelle ligne
    var newline = "<tr> <td><input name='pk' type='checkbox'></td> <td>"+i+"</td> <td class = 'nomm'>"+nom+"</td> <td class = 'pnomm'>"+pnom+"</td> <td class = 'agee'>"+age+"</td> <td class = 'adrrr'>"+adrr+"</td> <td class = 'sex'>"+sexe+"</td> <td><div class='small button-group'><a class='button butview'>View</a><a class='success button butedit'>Edit</a><a class='alert button butdel'>Delete</a></div></td> </tr>";
      $("table.theTable").append(newline);
    formBut.style.display='none';

    $('#nom').val('');
    $('#pnom').val('');
    $('#age').val('');
    $('#adrr').val('');
    $('input[type=radio][name=sexe]:checked').val('');


});

$('#resetbutton').click(function(){
  $('#nom').val('');
  $('#pnom').val('');
  $('#age').val('');
  $('#adrr').val('');
  $('input[type=radio][name=sexe]:checked').val('');
});


$("input[type=checkbox][name=sel]").change(function() {
  if(this.checked) {
      $("input[type=checkbox][name=pk]").prop("checked", true);
      delBut.style.display = 'block';
  }else if(!this.checked) {
    delBut.style.display = 'none';
  }

});


// tester l'existance de la ligne créer en html
$(document).ready(function() {
    $('#savebutton').click(function() {
            if ($("a.butview").is(":visible")) {

                  $('a.butview').click(function(){
                    $('#tabb tr ').each(function() {
                      see = $(this).find('td').eq(2).html();
                      console.log(see);
                    });

                    detail.style.display = 'block';
                    $("table.newtab tr").remove();
                    $("table.newtab").append("<tr><td><b>Nom</b></td><td>"+nom+"</td></tr>");
                    $("table.newtab").append("<tr><td><b>Prenom</b></td><td>"+pnom+"</td></tr>");
                    $("table.newtab").append("<tr><td><b>Age</b></td><td>"+age+"</td></tr>");
                    $("table.newtab").append("<tr><td><b>Addresse</b></td><td>"+adrr+"</td></tr>");
                    $("table.newtab").append("<tr><td><b>Sexe</b></td><td>"+sexe+"</td></tr>");
                  });
              }

            if ($("a.butdel").is(":visible")) {

                $('a.butdel').click(function(){
                  $("table.theTable").find('input[name="pk"]').each(function() {
                      if ($(this).is(":checked")) {
                          $(this).parents("table.theTable tr").remove();
                      }
                  });
                });
            }

            if ($("a.butedit").is(":visible")) {

                $('a.butedit').click(function(){
                  formBut.style.display='block';
                  console.log(nom);
                  $('#nom').val(nom);
                  $('#pnom').val(pnom);
                  $('#age').val(age);
                  $('#adrr').val(adrr);
                  $('input[type=radio][name=sexe]:checked').val(sexe);
                  $(this).parents("table.theTable tr").remove();
                });
            }
    });
});


$("#delbutton").click(function() {
        $("table.theTable").find('input[name="pk"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("table.theTable tr").remove();
            }
        });
    });
