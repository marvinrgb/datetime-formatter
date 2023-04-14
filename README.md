# DateTime Formatter
A convenient way of formatting Javascript Dates.
## Quick Start
The Module default exports a simple class that extends the Javascript Date class.

    import DateTime from '@marvinrgb/datetime-formatter;
    const datetime = new DateTime(1681280197000)
    
    console.log(datetime.format('YYYY-MM-DD_hh:mm:ss')


## Constructor
The constructor works the same way as the normal Date constructor.

    const today = new DateTime();
    const birthday = new DateTime("December 17, 1995 03:24:00"); // does not always work
    const birthday2 = new DateTime("1995-12-17T03:24:00");
    const birthday3 = new DateTime(1995, 11, 17); // the month is 0-indexed
    const birthday4 = new DateTime(1995, 11, 17, 3, 24, 0);
    const birthday5 = new DateTime(628021800000); // passing epoch timestamp
