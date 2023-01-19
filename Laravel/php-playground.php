<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Playground</title>
</head>

<body>
    <h1>Recommended Books</h1>

    <?php

    $books = [
        "Do Androids Dream of Electric Sheep",
        "The Langoliers",
        "Hail Mary"
    ];

    ?>

    <ul>
        <?php foreach ($books as $book) : ?>
            <li>
                <!-- shorthand for echo($a) -->
                <?= $book ?>
            </li>
        <?php endforeach; ?>
    </ul>

</body>

</html>