<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <meta name="turbolinks-cache-control" content="no-cache">
</head>
<body data-component="{{ $name }}" data-props="{{ json_encode($data) }}">

<div id="app"></div>

</body>
</html>
