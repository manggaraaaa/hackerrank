<?php

$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);

//use SplMinHeap & SplMaxHeap
$minHeap = new SplMinHeap();
$maxHeap = new SplMaxHeap();

function median($minHeap, $maxHeap){
    
    if($minHeap->isEmpty() && $maxHeap->isEmpty()){
        return 0;
    }
    
    if($minHeap->count() - $maxHeap->count() == 1){
        return $minHeap->top();
    }
    
    if($maxHeap->count() - $minHeap->count() == 1){
        return $maxHeap->top();
    }
    
    if(abs($maxHeap->count() - $minHeap->count()) > 1) {
        if($maxHeap->count()>$minHeap->count()) $minHeap->insert($maxHeap->extract());
        if($maxHeap->count()<$minHeap->count()) $maxHeap->insert($minHeap->extract());
    }
    
    if($maxHeap->count() == $minHeap->count()){
        return ($maxHeap->top() + $minHeap->top())/2;
    }
}

for($a_i = 0; $a_i < $n; $a_i++){
    
    $median = median($minHeap,$maxHeap);
    fscanf($handle,"%d",$value);
    
    if($value > $median){
        $minHeap->insert($value);
    }
    else{
        $maxHeap->insert($value);
    }
    
    echo number_format(median($minHeap,$maxHeap), 1, '.', '')."\n";
}
?>
