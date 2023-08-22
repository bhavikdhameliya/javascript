//total odd 1,3,5
	// let i=1,total=0;
	// do
	// {
	// 	i=i+2;
	// 	total+=i;
	// 	console.log(i);
	// }while(i<=10);
	// console.log(total);


//1,4,9,16....
int main()
{
	int i=1,n,j=1;
	printf("enter n:");
	scanf("%d",&n);
	while(i<=n)
	{
		j=i*i;
		printf("   %d",j);
		i++;
	}
	return 0;
}
