"""Leap year calculation"""

def leap_year(year):
    """Calculate if the given year is a leap year"""
    return (year % 4 == 0 and (year % 100 != 0 or year % 400 == 0))
