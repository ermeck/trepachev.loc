<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>017 PHP</title>
</head>
<body>
    <h4>Task 1</h4>
    <?php
        function isNumberInRange($num) {
            return $num > 0 && $num < 10 ? true : false;
        }
        echo isNumberInRange(44);
    ?>
    <h4>Task 2</h4>
    <?php
        $arr = [1, 20, 12, 4, 7, -65];
        $result = [];
        for ($i = 0; $i < count($arr); $i++) {
            if (isNumberInRange($arr[$i])) {
                $result[] = $arr[$i];
            }
        }
        echo '<pre>';
        print_r($result);
        echo '</pre>';
    ?>
    <h4>Task 3</h4>
    <?php
        function getDigitsSum($num) {
            $arr = str_split($num, 1);
            $sum = 0;
            for ($i = 0; $i < count($arr); $i++) {
                $sum += $arr[$i];
            }
            return $sum;
        }
        echo getDigitsSum(123);
    ?>
    <h4>Task 4</h4>
    <?php
        $count = 0;
        for ($i = 1; $i < 2019; $i++) {
            if (getDigitsSum($i) == 13) {
                $count++;
                echo $i . '<br>';
            }
        }
        echo 'Count = ' . $count;
    ?>
    <h4>Task 5</h4>
    <?php
        function isEven($num) {
            $boo = false;
            if ($num % 2 == 0) 
                $boo = true;
            return $boo;
        }
    ?>
    <h4>Task 6</h4>
    <?php
        $arr = [1, -3, 4, -6];
        $result = [];
        for ($i = 0; $i < count($arr); $i++) {
            if (isEven($arr[$i]))
                $result[] = $arr[$i];
        }
        var_dump($result);
    ?>
    <h4>Task 7</h4>
    <?php
        function getDivisors($num) {
            $result = [];
            for ($i = 2; $i < $num - 1; $i++) {
                if ($num % $i == 0)
                    $result[] = $i;
            }
            return $result;
        }
    ?>
    <h4>Task 8</h4>
    <?php
        function inArray($num, $arr) {
            for ($i = 0; $i < count($arr); $i++) {
                if ($num == $arr[$i])
                    return true;
                return false;
            }
        }
        function getCommonDivisors($a, $b) {
            $aArr = getDivisors($a);
            $bArr = getDivisors($b);
            $result = [];
            for ($i = 0; $i < count($aArr); $i++) {
                if (inArray($aArr[$i], $bArr))
                    $result[] = $aArr[$i];
            }
            return $result;
        }
        echo '<pre>';
        print_r(getDivisors(10));
        print_r(getDivisors(12));
        print_r(getCommonDivisors(10, 12));
        echo '</pre>';
    ?>
</body>
</html>