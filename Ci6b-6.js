//QuickSort

function sort(input){
	list=input;
	var low=0;
	var high=input.length-1;
	Q_sort(low,high);
}


function Q_sort(low,high){

	 var pivot=low;
	console.log("Pivot:" +pivot);
	 if(low>=high)
	 	return;
	 for(var i=low+1;i<=high;i++){
	 	if(list[low]<list[i]){
	 		pivot++;
	 		if(i!=pivot)
	 			swap(pivot,i)
	 	 }
	 }
	 swap(pivot,low)
	 if(pivot==3){
	 	console.log(list[pivot])
	 	return;
	 }
	 Q_sort(low,pivot-1);
	 Q_sort(pivot+1,high);
}

function swap(p,q){
	var temp=list[p];
	list[p]=list[q];
	list[q]=temp;
}

(function main(){
	sort([24,45,20,56,75,2,99,53,12])
	// sort([5,2,7,1,9])
	console.log(list)
})()


// 2 12 20 24 45 53 56 75 99
