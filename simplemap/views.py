from django.shortcuts import render


def default_map(request):
    # TODO: move this token to Django settings from an environment variable
    # found in the Mapbox account settings and getting started instructions
    # see https://www.mapbox.com/account/ under the "Access tokens" section
    mapbox_access_token = 'pk.eyJ1IjoiZ3JlZW5raW5nNDkiLCJhIjoiY2s3bmltN2U0MGd2ZjNnbjI5dHNhMWQ2aSJ9.eFth2Mu6svS6AqojgiJIxA'
    return render(request, 'mapshome.html',
                  { 'mapbox_access_token': mapbox_access_token })
