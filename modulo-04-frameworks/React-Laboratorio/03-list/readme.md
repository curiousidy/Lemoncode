# Tareas

    Buscar listado de miembros de una organización

## como ?
    Lllamando a la api de github con el endpoint https://api.github.com/orgs/lemoncode/members

## primera aproximacion
    1. 
    2. Necesito el parametro de la url base https://api.github.com/orgs ok
    3. variable nombre de la organización {organizationName} ok
    4. necesito que el usuario escriba el nombre de la organización. input ok
     Crear un estado para guardar el nombre de la organización. ok
    5. guardar el nombre de la organización. ok
    6. completar la url. https://api.github.com/orgs${OrganizationName}/members oks
    7. hacer la llamada a la api. fetch(https://api.github.com/orgs${OrganizationName}/members) ok
    8. manejar la respuesta.