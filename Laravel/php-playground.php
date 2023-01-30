<?php
class TaxCalculator
{
    public $rate;
    public $sub_total;
    public $isTaxable;

    public function __construct(float $rate, float $sub_total, bool $isTaxable)
    {
        $this->rate = $rate;
        $this->sub_total = $sub_total;
        $this->isTaxable = $isTaxable;
    }


    public function calculate(): float | bool
    {
        // if not taxable then just return false
        if (!$this->isTaxable) return false;

        // if rate is represented in a percentage convert to a decimal value equivalent
        if ($this->rate > 1) {
            $this->rate = ($this->rate / 100);
        }

        return ($this->rate * $this->sub_total);
    }
}

$calculator = new TaxCalculator(8.25, 300.00, true);
echo ($calculator->calculate());

echo ("\n");

class NeedleInHayStack
{
    public $needle;
    public $hay;

    public function __construct(mixed $needle, array | object $hay)
    {
        $this->needle = $needle;
        $this->hay = $hay;
    }

    public function find()
    {
        if (gettype($this->hay) === "object") {
            // little cheat to convert object to ass. array
            $this->hay = (array) $this->hay;
        }

        // if hay type is array and not found
        return in_array($this->needle, $this->hay);
    }
}

$test = new NeedleInHayStack("world", ["hello" => "world"]);

echo ($test->find());

echo ("\n");

class FindCharacterInStrings
{
    public array $strings;
    public string $char;

    public function __construct(array $strings, string $char)
    {
        $this->strings = $strings;
        $this->char = $char;
    }

    public function findChar(): bool
    {
        $found = false;

        foreach ($this->strings as $string) {
            $found = (str_contains($string, $this->char));
        }

        return $found;
    }
}

$moreDifficultTest = new FindCharacterInStrings(["testing", "should", "result", "in", "pass"], "a");
$moreDifficultTest2 = new FindCharacterInStrings(["testing", "should", "result", "in", "FAIL"], "a");

echo ($moreDifficultTest->findChar());
echo ("\n");
var_dump ($moreDifficultTest2->findChar());
