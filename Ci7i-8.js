//common elements in 3 sorted arrays

var q13=function (){
var list1=[1, 5, 10, 20, 40, 80]
var list2=[6, 7, 20, 80, 100]
var list3=[3, 4, 15, 20, 30, 70, 80, 120]

var i=0,j=0,k=0;

while(i<list1.length && j<list2.length && k<list3.length){
	if(list1[i]==list2[j] && list2[j]==list3[k])
		{
			console.log(list1[i])
			i++;j++;k++;
		}
		else if(list1[i]<list2[j])
		i++;
		else if(list2[j]<list3[k])
		j++;
		else
		k++;
		
		}
}

// q13();


var q17=function(){
	var list=[1,1,3,4,6,7,9];
	
	var res=1;
	for(var i=0;i<list.length && list[i]<=res; i++)
	res+=list[i];
	
	console.log(res+" is the smallest.")
}

// q17()

var q18=function()
{
	var list=[1, 2, 3, -4, -1, 4];
	console.log(list)
	var pos=[];var neg=[]
	for(var p=0;p<list.length;p++){
		if(list[p]>0)
		pos.push(list[p])
		else
		neg.push(list[p])
	}
	var i=0,j=0;
	list.splice(0,list.length);
 
	while(i<pos.length && j<neg.length){
		list.push(neg[j]);
		list.push(pos[i]);
		i++;j++;
	}
	
	while(i==pos.length && j<neg.length){
		list.push(neg[j])
		j++;
	}
	while(j==neg.length && i<pos.length){
		list.push(pos[i])
		i++;
	}
	
	console.log(list)
}

// q18()

q20=function(){
 var list=[1,1,1,2,3];
 var i=0;j=1;
 while(j<list.length){
 	if(list[i]==list[j])
 	j++
 	else
 	{
 		i++;
 		list[i]=list[j];
 		j++;
 	}
 }
 list.splice(i,j-1-i);
 console.log(list)
}

// q20()


q21=function(){
	var list=[2,4,5,8,1,4,9,4];
	console.log(list)
	var elem=4;
	var buf=[]
	for(var i=0;i<list.length;i++)
	{
		if(list[i]==elem)
		buf.push(i);
	}
	
	// console.log(buf)
	
	for(var j=0;j<buf.length;j++){
		list.splice(buf[j]-j,1)
	}
	
	console.log(list)
}

// q21()



q22=function(){
	var list1=[1,7,8,9];
	var list2=[2,5,6,10];
	var res=[]
	var i=0;var j=0;
	while(i<list1.length && j<list2.length){
		if(list1[i]<list2[j])
		{
			res.push(list1[i])
			i++;
		}
		 else if(list1[i]>list2[j])
		 {
		 	res.push(list2[j])
		 	j++;
		 }
		 
	}
	
	while(i==list1.length && j<list2.length){
		res.push(list2[j]);
		j++;
	}
	
	while(i<list1.length && j==list2.length){
		res.push(list1[i]);
		i++;
	}
	
	console.log(res)
	
}

// q22()
var q26soln=function(arr1,low,high){
	var arr=arr1
	if(high<low)
	return "No elements";
	if(high==low)
	return arr[low]
	var mid=low+(high-low)/2
	if(mid<high && arr[mid+1]<arr[mid])
	return arr[mid+1]
	if(mid>low && arr[mid]<arr[mid-1])
	return arr[mid]
	if(arr[high]>arr[mid])
	return q26soln(arr,low,mid-1)
	
	return q26soln(arr,mid+1,high)
	
}

q26=function(){
	list=[5,6,1,2,3,4]
		console.log(q26soln(list,0,list.length-1))
	
}
// q26()


q28=function(){
	var arr=[1,3,5,4,2];
	var size=arr.length;
	var temp;
	var i=0;var j=size-1;
	while(i<size/2){
		temp=arr[i];
		arr[i]=arr[j]
		arr[j]=temp;
		i++;j--;
	}
	
	console.log(arr)
}

// q28()


q2526=function(){
	var arr=[-9,6,7,-8];
	
	var mf=1,mh=1,maxstart=0,maxsofars=0;maxsofare=0;
	var res=0;
	for(var i=0;i<arr.length;i++){
		mh+=arr[i];
		if(mh<0){
			mh=1;
			maxstart=i;
		}
		
		if(mf<mh){
			mf=mh;
			maxsofars=maxstart;
			maxsofare=i;
		}
	}
	
	for(var i=maxsofars+1;i<=maxsofare;i++)
	console.log(arr[i])
	
	console.log("********")
	
	return (mf)
}
console.log(q2526()-1)







