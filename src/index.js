import Color from 'color';

export default function transformColor(start, end, transformedValue) {
	start = Color(start);
	end = Color(end);
	return Color().red(start.red() + (transformedValue * (end.red() - start.red())))
		.green(start.green() + (transformedValue * (end.green() - start.green())))
		.blue(start.blue() + (transformedValue * (end.blue() - start.blue())))
		.alpha(start.alpha() + (transformedValue * (end.alpha() - start.alpha())));
}
