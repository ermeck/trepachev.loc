<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h3>Заполнение массивов</h3>

    <h4>Task 1</h4>
    <?php
        $arr = [];
        $str = '';
        for ($i = 0; $i < 3; $i++) {
            $str .= 'x';
            $arr[$i] = $str;
        }

        echo '<pre>';
        print_r($arr);
        echo '</pre>';
    ?>

    <h4>Task 2</h4>
    <?php
        $arr = [];
        for ($i=1; $i < 5; $i++) { 
            $n = $i;
            for ($j=1; $j < $i; $j++) { 
                $n .= $i;
            }
            $arr[] = $n;
        }
        echo '<pre>';
        print_r($arr);
        echo '</pre>';
    ?>

    <h4>Task 3</h4>
    <?php
        
        function arrayFill($x, $y) {
            $arr = [];
            for ($i = 0; $i < $y; $i++) {
                $arr[] = $x;
            }
            return $arr;
        }
        $arr = arrayFill('x', 5);

        echo '<pre>';
        print_r($arr);
        echo '</pre>';
    ?>

    <h4>Task 4</h4>
    <?php
        $arr = [1, 6, 3, 5, 3, 8];
        $sum = 0;
        $i = 1;
        while ($sum <= 10) {
            $i++;
            $sum += $arr[$i];
        }
        echo $i;
    ?>

    <h3>Многомерные массива</h3>

    <h4>Task 5</h4>
    <?php
        $arr = [
            [1, 2, 3],
            [4, 5],
            [6]
        ];
        $sum = 0;
        foreach ($arr as $key) {
            foreach ($key as $elem) {
                $sum += $elem;
            }
        }
        echo $sum;
    ?>
    <h4>Task 6</h4>
    <?php
        $arr = [
            [
                [1, 2],
                [3, 4]
            ],
            [
                [5, 6],
                [7, 8]
            ]
        ];
        $sum = 0;
        foreach ($arr as $elem) {
            foreach ($elem as $sub)
                foreach ($sub as $sub_sub) {
                    $sum += $sub_sub;
                }
        }
        echo $sum;
    ?>
    <h4>Task 7</h4>
    <?php
        $arr = [];
        $k = 0;
        for ($i = 0; $i < 3; $i++) {
            for ($j = 0; $j < 3; $j++) {
                $k++;
                $arr[$i][$j] = $k;
            }
        }
        echo '<pre>';
        print_r($arr);
        echo '</pre>';
    ?>
</body>
</html>