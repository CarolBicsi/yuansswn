# yuansswn
C语言中%d,%p,%f,%e,%x的意义

格式说明由“％”和格式字符组成，如％d％f等。它的作用是将输出的数据转换为指定的格式输出。格式说明总是由“％”字符开始的。不同类型的数据用不同的格式字符。
格式字符有d,o,x,u,c,s,f,e,g等。
如

％d整型输出，％ld长整型输出，

%p 输出变量的内存地址，

％o以八进制数形式输出整数，

％x以十六进制数形式输出整数，

％u以十进制数输出unsigned型数据(无符号数)。

％c用来输出一个字符，

％s用来输出一个字符串，

％f用来输出实数，以小数形式输出，

％e以指数形式输出实数，

％g根据大小自动选f格式或e格式，且不输出无意义的零。

scanf(控制字符，地址列表)
格式字符的含义同printf函数，地址列表是由若干个地址组成的表列，可以是变量的地址，或字符串的首地址。如scanf("％d％c％s",&a,&b,str)；

<ctype.h>头文件提供一些函数，可以用来测试和映射字符。这些函数接受int作为参数，它的值必须是EOF或表示为一个无符号字符.如果满足则返回非零值，否则返回0.

常使用到的函数：
1：判断函数
1：int isalnum(int c) //检查所传字符是否为数字或字母。
2：int isalpha(int c) //检查所传的字符是否为字母。
3：int iscntrl(int c) //检查所传的字符是否为控制字符
4：int isdigit(int c) //检查所传的字符是都为十进制数字
5：int isgraph(int c) //检查所传的字符是否有图形表示法
6：int islower(int c) //检查所传的字符是否为小写字母
7：int isprint(int c) //检查所传的字符是否可打印
8：int ispunct(int c) //检查所传的字符是否是标点符号字符
9：int isspace(int c) //检查所传的字符是否是空白字符
10：int isupper(int c) //检查所传的字符是否是大写字母
11：int isxdigit(int c) //检查所传的字符是否为十六进制数字
2：转换函数
1：int tolower(int c) //把大写字母转换为小写字母
2：int toupper(int c) //把小写字母转换为大写字母
3：标点符号集合
！" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ' { | } ~
4：图像字符
字母数字字符和标点符号字符的集合。

gets函数
其形式为：gets(字符数组)——输入字符串的函数

作用是从终端输入一个字符串到字符数组，并且得到一个函数值。
2、puts函数
其形式为：puts(字符数组)——输出字符串的函数

作用是将一个字符串(以‘\0’结束的字符序列)输出到终端。
3、strcat函数
其形式为：strcat(字符数组1，字符数组2)——字符串连接的函数

作用是把两个字符数组中的字符串连接起来，把字符串2连接到字符串1的后面，结果放在字符数组1中
4、strcpy函数（strncpy函数）
其形式为：strcpy(字符数组1，字符串2)——字符串复制的函数

作用是将字符串2复制到字符数组1中去。
strcpy(字符数组1，字符串2，n)——字符串选择复制的函数

n：表示将字符串2中的n个单个字符复制到字符数组1中，最少为0个，最多不能超过字符串2的长度。作用与strcpy函数差不都，都是字符串复制函数。
5、strcmp函数（strncmp函数）
其形式为：strcmp(字符数组1，字符串2)——字符串比较的函数

因为字符串不能用等号来比较大小，所以就用strcmp函数来比较！！！！！！

比较规则：

（1）如果全部字符相同，则认为两个字符串相等；

（2）若出现不相同的字符，则以第一对不相同的字符比较结果为准。（'a'<'z'；'A'<'Z'）。

比较的结果由函数值带回：

（1）如果字符串1与字符串2相同，则函数值为0。
（2）如果字符串1 > 字符串2，则函数值返回一个正数。
（3）如果字符串1 < 字符串2，则函数值返回一个负数。
strncmp(字符数组1，字符串2，n)——字符串选择比较的函数

n：选择字符串的前n个字符进行比较，定义和strcmp一样。

（1）如果字符串1与选择的字符串2相同，则函数值为0
（2）如果字符串1 > 选择的字符串2，则函数值返回一个正数。
（3）如果字符串1 < 选择的字符串2，则函数值返回一个负数。

6、strlen函数
其形式为：strlen(字符数组)——测字符串长度的函数

作用是测试字符串长度的函数，函数的值为字符串实际的长度（不包括 '\0' 在内）。

strlen也可以直接测试字符串常量的长度

7、strlwr函数
其形式为：strlwr(字符串)——转换为小写的函数

该函数的作用是将字符串中的大写字母转换成小写字母。
8、strupr函数
其形式为：strupr(字符串)——转换为大写的函数

该函数的作用是将字符串中的小写字母转换成大写字母
9、strstr函数
其形式为：strstr(字符串1，字符串2)——查找字符串的函数

函数用于判断字符串str2是否是str1的子串。如果是，则该函数返回str2在str1中首次出现的地址；否则，返回NULL。

如果找到该数组，就会从找到的地方开始输出；

math.h头文件中声明了常用的一些数学运算




数学函数库，一些数学计算的公式的具体实现是放在math.h里，具体有：
1、 三角函数
double sin(double);正弦
double cos(double);余弦
double tan(double);正切
2 、反三角函数
double asin (double); 结果介于[-PI/2,PI/2]
double acos (double); 结果介于[0,PI]
double atan (double); 反正切（主值），结果介于[-PI/2,PI/2]
double atan2 (double,double); 反正切（整圆值），结果介于[-PI,PI]
3 、双曲三角函数
double sinh (double);
double cosh (double);
double tanh (double);
4 、指数与对数
double frexp(double value,int *exp);这是一个将value值拆分成小数部分f和（以2为底的）指数部分exp，并返回小数部分f，即f*2^exp。其中f取值在0.5~1.0范围或者0。
double ldexp(double x,int exp);这个函数刚好跟上面那个frexp函数功能相反，它的返回值是x*2^exp
double modf(double value,double *iptr);拆分value值，返回它的小数部分，iptr指向整数部分。
double log (double); 以e为底的对数
double log10 (double);以10为底的对数
double pow(double x,double y);计算x的y次幂
float powf(float x,float y); 功能与pow一致，只是输入与输出皆为浮点数
double exp (double);求取自然数e的幂
double sqrt (double);开平方
5 、取整
double ceil (double); 取上整，返回不比x小的最小整数
double floor (double); 取下整，返回不比x大的最大整数，即 高斯函数[x]
6 、绝对值
int abs(int i); 求整型的绝对值
double fabs (double);求实型的绝对值
double cabs(struct complex znum);求复数的绝对值
7 、标准化浮点数
double frexp (double f,int *p); 标准化浮点数，f = x * 2^p，已知f求x,p (x介于[0.5,1])
double ldexp (double x,int p); 与frexp相反，已知x,p求f
8 、取整与取余
double modf (double,double*); 将参数的整数部分通过指针回传，返回小数部分
double fmod (double,double); 返回两参数相除的余数
9 、其他
double hypot(double x,double y);已知直角三角形两个直角边长度，求斜边长度
double ldexp(double x,int exponent);计算x*（2的exponent次幂）
double poly(double x,int degree,double coeffs []);计算多项式
int matherr(struct exception *e);数学错误计算处理程序
source: 《C & C++ Code Capsules》
注意事项编辑
没有现成的cot三角函数，可以使用tan(PI/2-x)来实现
double atan2(double y,double x);取值范围在(PI,PI)之间；这是一个不太常见的函数，主要用来返回y/x的反正切值。
强调一点，1-3类 传参都是针对以弧度表示的数值，非角度表示的数值。
对于一般的对数求解，考虑利用数学上的对数转换来实现。
关于fmod：考虑到%只适用与整型数据，这里提出一个专门针对实型数据的取余运算的函数。
int rand(void) 用这函数的时候记得要给随机种子哦，要不得出的不是真正的随机数.产生随机种子可以用srand((unsigned int)time(NULL));这就是由时间产生的随机种子了。


插入排序
核心思路：把待排序的记录按其关键码值的大小逐个插入到一个已经排好序的有序序列中，直到所有的记录插入完为止，得到一个新的有序序列 。
#include<stdio.h>
void InsertSort(int* arr, int sz)//按照升序排序
{
	int i = 0;
	for (i = 0; i < sz - 1; i++)//最多是将n-1的数据插入前面
	{
		int end = i;
		int tmp = arr[end + 1];//tmp存放的是end后面第一个数据即需要插入到前面的数据
		while (end >= 0)
		{
			//大于就将end的数据向后移动一位，小于就停止，说明此时end的位置已经为空，直接插入
			if (arr[end] > tmp)
			{
				arr[end + 1] = arr[end];
				end--;//继续让end前面的跟tmp中的数据比较
			}
			else
			{
				break;//说明此时tmp中的元素大于或者等于end的数据
			}
		}
		//直接将tmp即原来end-1位置的数据放入此时end+1的位置即可实现插入
		arr[end+1] = tmp;
	}
}
int main()
{
	int arr[] = { 4,2,3,8,9,5,6,7,1,0 };
	int sz = sizeof(arr) / sizeof(int);
	InsertSort(arr, sz);
	int i = 0;
	for (i = 0; i < sz; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}

2.2希尔排序(缩小增量排序)

2.2.1核心思路：先选定一个整数（gap），把待排序文件中所有记录分成个组，所有距离为的记录分在同一组内，并对每一组内的记录进行排序。然后取重复上述分组和排序的工作。当到达=1时，所有记录在统一组内排好序。

2.2.2  gap>1是预排序，gap=1就是直接插入排序

gap越大，大的数会越快排到后面，小的数越快到前面

gap越小，越接近有序
#include<stdio.h>
void ShellSort(int* arr, int sz)
{
	int gap = sz;
	while (gap > 1)//当间隔大于1的时候进行预排序，等于1就是直接排序，此时已经有序
	{
		gap = gap / 2;//间隔越来越小
		int i = 0;
		for(i=0;i<sz-gap;i++)//把间隔为grap的多组数据同时排
		{
			int end = i;//要排序的位置的前grap个位置的元素
			int tmp = arr[end + gap];
			while (end >= 0)
			{
				if (arr[end] > tmp)//当end位置的数据大于tmp时，再与end-间隔（grap)的数据进行比较
				{
					arr[end + gap] = arr[end];//将比tmp大的数据依次向后移动间隔grap
					end -= gap;//每次让end减少间隔grap
				}
				else
				{
					break;
				}
			}
			//此时end下标的数据小于tmp。所以将tmp放入到end+grap的下标处
			arr[end + gap] = tmp;
		}
	}
}
int main()
{
	int arr[] = { 9,8,7,6,5,4,3,2,1,0 };
	int sz = sizeof(arr) / sizeof(int);
	ShellSort(arr, sz);
	int i = 0;
	for (i = 0; i < sz; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}

选择排序
3.1选择排序

核心思路： 每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完 .
为了提高效率,可以在一次遍历找到最大和最小元素的下标,然后分别和数组的起始位置和最后的位置进行交换.
#include<stdio.h>

void Swap(int* p1, int* p2)
{
	int tmp = *p1;
	*p1 = *p2;
	*p2 = tmp;
}
//直接选择排序
void SelectSort(int* arr, int sz)
{
	int begin = 0;
	int end = sz - 1;
	while (begin < end)
	{
		int mini = begin;//最小数的下标mini
		int maxi = begin;//最大数下标maxi
		int i = 0;
		for (i = begin; i <= end; i++)
		{
			if (arr[i] > arr[maxi])
			{
				maxi = i;
			}
			if (arr[i] < arr[mini])
			{
				mini = i;
			}
		}
		//下标为maxi的数据就是最大数，下标为mini的数据就是最小数
		Swap(&arr[begin], &arr[mini]);
		//如果begin和maxi重叠，需要重新修正一下maxi的位置，即交换后的mini的位置
		if (maxi == begin)
		{
			maxi = mini;
		}
		Swap(&arr[maxi],&arr[end]);
		end--;
		begin++;
	}
}
int main()
{
	int arr[] = { 8,7,5,6,1,2,0,3,4,9 };
	int sz = sizeof(arr) / sizeof(arr[0]);
	SelectSort(arr, sz);
	int i = 0;
	for (i = 0; i < sz; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}

四、交换排序
交换就是根据序列中两个记录键值的比较结果来对换这两个记录在序列中的位 置，交换排序的特点是：将键值较大的记录向序列的尾部移动，键值较小的记录向序列的前部移动

4.1冒泡排序
void BubbleSort(int* arr, int sz)
{
	int i = 0;
	int j = 0;
	//比较的趟数
	for (i = 0; i < sz - 1; i++)
	{
		//比较的对数
		int flag = 0;//标记是否已经有序
		for (j = 0; j < sz - 1 - i; j++)
		{
			if (arr[j + 1] < arr[j])
			{
				Swap(&arr[j + 1], &arr[j]);
				flag = 1;
			}
		}
		if (flag == 0)
		{
			break;
		}
	}
}
int main()
{
	int arr[] = { 9,8,7,6,5,4,3,2,1,0 };
	int sz = sizeof(arr) / sizeof(int);
	BubbleSort(arr, sz);
	int i = 0;
	for (i = 0; i < sz; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}

快速排序

核心思路：任取待排序 元素序列中的某元素作为基准值，按照该排序码将待排序集合分割成两子序列，左子序列中所有元素均小于基准值，右子序列中所有元素均大于基准值，然后最左右子序列重复该过程，直到所 有元素都排列在相应位置上为止
快速排序（递归）三种方法：

A.挖坑法

核心思路：先将第一个位置的数据保存用key关键字保存，设置一个开始下标为0的begin从左→右找比关键字大的，再设置一个开始下标为最后一个数据的下标end，从右→左找比关键字小的，同时将开始的位置begin设置为坑（pivot），如果找到了，就将该位置的值放在坑（pivot）位置，然后将此位置当做坑，继续上述操作，直到begin与end相遇，此时将关键字的值放在坑位置即可，这是单趟排序，然后从pivot下标的位置开始分区间  ，[0,pivot-1]  和[pivot+1,right],再进行排序（递归）
#include<stdio.h>

//三数取中
int GetMidIndex(int* arr, int left, int right)
{
	int mid = (left + right) >> 1;
	if (arr[left] < arr[mid])
	{
		if (arr[mid] < arr[right])
		{
			return mid;
		}
		else if (arr[right] < arr[left])
		{
			return left;
		}
		else
			return right;
	}
	else
	{
		if (arr[right] < arr[mid])
		{
			return mid;
		}
		else if (arr[left] < arr[right])
		{
			return left;
		}
		else
			return right;
	}
	
}

void Swap(int* p1, int* p2)
{
	int tmp = *p1;
	*p1 = *p2;
	*p2 = tmp;
}

void QuickSort(int* arr, int left, int right)
{
	//如果没有区间（只有一个数据）就结束
	if (left >= right)
		return;
	int index = GetMidIndex(arr, left, right);
	Swap(&arr[left], &arr[index]);
	int begin = left;
	int end = right;
	int key = arr[begin];//关键字
	int pivot = begin;//坑
	while (begin < end)
	{
		//右边找比关键字小的，放在坑位置
		while ((begin < end) && (arr[end] >= key))
		{
			end--;
		}
		arr[pivot] = arr[end];//将比关键字小的数据放入坑
		pivot = end;//将此时end的位置当做坑
		//左边找比关键字大的放在坑位置
		while ((begin < end) && (arr[begin] <= key))
		{
			begin++;
		}
		arr[pivot] = arr[begin];//将比关键字大的放在坑位置
		pivot = begin;//将此时的begin的位置当做坑
	}
	//循环结束后，此时begin和end相等，所指的位置就是坑
	pivot = begin;
	arr[pivot] = key;
	//然后再将关键字左边和右边的分别排序，整体就有序了
	QuickSort(arr, left, pivot - 1);
	QuickSort(arr, pivot + 1, right);
}


int main()
{
	int arr[] = { 9,8,7,6,5,4,3,2,1,0 };
	int sz = sizeof(arr) / sizeof(arr[0]);
	QuickSort(arr, 0, sz - 1);
	int i = 0;
	for (i = 0; i < sz; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}
为了提高快排的效率，可以使用三数取中的方法，避免数据是有序的

注意：只能先从右向左找大，然后再从左向右找小

B.左右指针法

核心思路：用key指向第一个位置的下标，设置一个开始下标为0的begin从左→右找比key所指数据大的，再设置一个开始下标为最后一个数据的下标end，从右→左找比key所指数据小的，当begin和end都找到数据以后交换数据，然后继续向后找，直到begin和end相遇，此时将end和begin相遇的下标的值和key中的值交换，这是单趟排序，然后从begin和end相遇的下标的位置开始分区间  ，[0,begin-1]  和[begin+1,right],再进行排序（递归）

#include<stdio.h>

//三数取中
int GetMidIndex(int* arr, int left, int right)
{
	int mid = (left + right) >> 1;
	if (arr[left] < arr[mid])
	{
		if (arr[mid] < arr[right])
		{
			return mid;
		}
		else if (arr[right] < arr[left])
		{
			return left;
		}
		else
			return right;
	}
	else
	{
		if (arr[right] < arr[mid])
		{
			return mid;
		}
		else if (arr[left] < arr[right])
		{
			return left;
		}
		else
			return right;
	}
	
}


void Swap(int* p1, int* p2)
{
	int tmp = *p1;
	*p1 = *p2;
	*p2 = tmp;
}


int PartSort(int* arr, int left, int right)
{
	int index = GetMidIndex(arr, left, right);
	Swap(&arr[left], &arr[index]);
	int begin = left;
	int end = right;
	int key = begin;
	while (begin < end)
	{
		//右边找小
		while ((begin < end) && (arr[end] >= arr[key]))
		{
			end--;
		}
		//左边找大
		while ((begin < end) && (arr[begin] <= arr[key]))
		{
			begin++;
		}
		//交换begin和end
		Swap(&arr[begin], &arr[end]);
	}
	//交换begin==end时所指数据和key交换
	Swap(&arr[begin], &arr[key]);
	return begin;
	
}

//快速排序

void QuickSort(int* arr, int left, int right)
{
	if (left >= right)
		return;
	int keyIndex = PartSort(arr, left, right);
	//分治算法  继续对左右区间分别进行排序
	QuickSort(arr, left, keyIndex-1);
	QuickSort(arr, keyIndex + 1, right);
}


int main()
{
	int arr[] = { 9,8,7,6,5,4,3,2,1,0 };
	int sz = sizeof(arr) / sizeof(int);
	QuickSort(arr, 0, sz - 1);
	int i = 0;
	for (i = 0; i < sz; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}

C.前后指针法

核心思路：设置第一个数据的下标为prev和key，第二个数据的下标为cur，然后让cur开始找比key所指数据小的数据，找到就停下，然后让perv++，为了提高效率，perv++不等于cur，然后再交换perv和cur所指数据，再让cur++，当下标cur>数组最大下标时就结束，此时，将prev所指数据和key所指数据交换，再进行分区间[0,prev-1]和[prev+1,right]  ，分区间再进行上述操作（递归）
#include<stdio.h>
//三数取中
int GetMidIndex(int* arr, int left, int right)
{
	int mid = (left + right) >> 1;
	if (arr[left] < arr[mid])
	{
		if (arr[mid] < arr[right])
		{
			return mid;
		}
		else if (arr[right] < arr[left])
		{
			return left;
		}
		else
			return right;
	}
	else
	{
		if (arr[right] < arr[mid])
		{
			return mid;
		}
		else if (arr[left] < arr[right])
		{
			return left;
		}
		else
			return right;
	}
	
}


void Swap(int* p1, int* p2)
{
	int tmp = *p1;
	*p1 = *p2;
	*p2 = tmp;
}


void QuickSort(int* arr, int left, int right)
{
	if (left >= right)
		return;
	int mid = GetMidIndex(arr, left, right);
	Swap(&arr[left], &arr[mid]);//避免队列有序
	int cur = left+1;
	int prev = left;
	int key = left;
	while (cur <= right)
	{
		//找比key小的
		if ((arr[cur] < arr[key]) && (prev++ != cur))//后面避免自己与自己交换
		{
			Swap(&arr[cur], &arr[prev]);
		}
		cur++;//cur往后继续找
	}
	//交换perv与刚开始key的值
	Swap(&arr[prev], &arr[key]);
	QuickSort(arr, left, prev - 1);
	QuickSort(arr, prev + 1, right);
	
}

int main()
{
	int arr[] = { 9,8,7,6,5,4,3,2,1,0 };
	int sz = sizeof(arr) / sizeof(int);
	QuickSort(arr, 0, sz - 1);
	int i = 0;
	for (i = 0; i < sz; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}

